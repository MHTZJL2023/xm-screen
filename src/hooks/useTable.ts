import { isFunction } from 'lodash-es';
import { computed, ref, watch } from 'vue';
import { usePagination } from 'vue-request';

export const useTable: any = (service?: any, options?: any) => {
  const { data, current, pageSize, total, run, params, ...others } =
    usePagination(!service ? () => {} : service, {
      ...options,
      pageSizeKey: 'pages',
    });

  /**
   * 动态数据
   * @param {*} computed
   * @return {*}
   */
  const dataSource = ref<any>([]);
  watch(data, async (values: any) => {
    if (options?.formatResult && isFunction(options?.formatResult)) {
      dataSource.value = await options?.formatResult(values);
    } else {
      dataSource.value = values?.records; // 默认
    }
  });

  /**
   * 分页
   * @param {*} computed
   * @return {*}
   */
  const pagination = computed(() => ({
    total: total.value,
    current: current.value,
    pages: pageSize.value,
  }));

  /**
   * 变动
   * @param {object} pag
   * @param {any} filters
   * @param {any} sorter
   * @return {*}
   */
  const handleTableChange = (
    pag: { pageSize: number; current: number },
    filters: any,
    sorter: any,
  ) => {
    run({
      pages: pag?.pageSize,
      current: pag?.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  /**
   * 查询
   * @param {any} query
   * @return {*}
   */
  const toSearch = (query?: any) => {
    dataSource.value = [];
    run({
      current: 1,
      pages: pageSize.value,
      ...query,
    });
  };

  /**
   * 刷新数据
   * 如果isReset为true则重置分页
   * @param {boolean} isReset
   * @return {*}
   */
  const toRefresh = (isReset?: boolean) => {
    if (!isReset) {
      run({
        ...params,
        current: current.value,
        pages: pageSize.value,
      });
    } else {
      dataSource.value = [];
      run({
        current: 1,
        pages: pageSize.value,
      });
    }
  };

  /**
   * 删除行数据
   * @param {number} index
   * @return {*}
   */
  const toRemoveRowByIndex = (index: number) => {
    dataSource.value.splice(index, 1);
  };

  /**
   * 更新索引值为index的行内容
   * 不刷新页面
   * @param {object} newItem
   * @param {number} index
   * @return {*}
   */
  const toUpdateRowByIndex = (index: number, newItem: object) => {
    const currentItem = dataSource.value[index] || {};
    dataSource.value[index] = Object.assign(currentItem, newItem);
  };

  /**
   * 更新行数据中单一字段
   * 不刷新页面
   * @param {*} key
   * @param {*} value
   * @param {*} updateItem
   * @return {*}
   */
  const toUpdateRowFieldByIndex = (
    index: number,
    key: string,
    value: string | number,
  ) => {
    dataSource.value[index][key] = value;
  };

  /**
   * 根据id更新行数
   * @param {object} newItem
   * @param {any} id
   * @return {*}
   */
  const toUpdateRowById = (id: string | number, newItem: object) => {
    const inx = dataSource.value.findIndex((item: any) => item.id === id);
    if (inx === -1) return;
    const currentItem = dataSource.value[inx] || {};
    dataSource.value[inx] = Object.assign(currentItem, newItem);
  };

  /**
   * 通过ID查找更新行数据中单一字段
   * @param {string} key
   * @param {any} value
   * @param {any} id
   * @return {*}
   */
  const toUpdateRowFieldById = (
    id: string | number,
    key: string,
    value: any,
  ) => {
    const inx = dataSource.value.findIndex((item: any) => item.id === id);
    if (inx === -1) return;
    dataSource.value[inx][key] = value;
  };

  /**
   * @param {any} id
   * @return {*}
   */
  const toRemoveRowById = (id: string | number) => {
    const inx = dataSource.value.findIndex((item: any) => item.id === id);
    if (inx === -1) return;
    dataSource.value.splice(inx, 1);
  };

  return {
    total,
    current,
    pageSize,
    dataSource,
    pagination,
    params,
    handleTableChange,
    run,
    toSearch,
    toRefresh,
    toRemoveRowByIndex,
    toUpdateRowByIndex,
    toUpdateRowFieldByIndex,
    toRemoveRowById,
    toUpdateRowById,
    toUpdateRowFieldById,
    ...others,
  };
};
