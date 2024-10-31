import { isFunction } from 'lodash-es';
import { computed, ref, watch } from 'vue';
import { usePagination } from 'vue-request';
export const useTable: any = (service: any, options?: any) => {
  const { data, current, pageSize, total, run, params, ...others } =
    usePagination(service, {
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
    console.log('--- dataSource.value ---', values.records);
  });
  // const dataSource = computed(() => {
  //   console.log('dataSource.value', data.value);
  //   const values: any = data.value;
  //   return values?.result;
  // });

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
    console.log('pageSize', pag);

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
    run({
      current: 1,
      pages: pageSize.value,
      ...query,
    });
  };

  /**
   * 刷新
   * @return {*}
   */
  const toRefresh = () => {
    run({
      current: 1,
      pages: pageSize.value,
    });
  };

  /**
   * 编辑
   * updateItem 编辑后的内容
   * isRefresh 是否刷新页面
   * @return {*}
   */
  const toUpdate = () => {
    run({
      ...params.value,
      current: current.value,
      pages: pageSize.value,
    });
  };

  /**
   * 更新单条数据 不刷新页面
   * @param {*} key
   * @param {*} value
   * @param {*} updateItem
   * @return {*}
   */
  const toSingleUpdate = (
    key: string,
    value: string | number,
    updateItem: any,
  ) => {
    const findInx = dataSource.value.findIndex(
      (item: any) => item[key] === value,
    );
    const currentItem = dataSource.value[findInx];
    dataSource.value[findInx] = { ...currentItem, ...updateItem };
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
    toUpdate,
    toSingleUpdate,
    ...others,
  };
};
