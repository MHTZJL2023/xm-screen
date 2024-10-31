/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-12 17:28:21
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 18:01:14
 * @FilePath: /vite-project/src/hooks/useBaseTable.ts
 * @Description:
 */
import { computed, ref, toRef, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
export const useBaseTable = () => {
  const baseTableRef = ref<any>();

  /**
   * 查询
   * @param {any} query
   * @return {*}
   */
  const toSearch = (query?: any) => {
    const { run, pageSize } = baseTableRef.value;
    run({
      current: 1,
      pages: pageSize,
      ...query,
    });
  };

  /**
   * 刷新
   * @return {*}
   */
  const toRefresh = () => {
    const { run, pageSize } = baseTableRef.value;
    run({
      current: 1,
      pages: pageSize,
    });
  };

  /**
   * 编辑
   * updateItem 编辑后的内容
   * isRefresh 是否刷新页面
   * @return {*}
   */
  const toUpdate = () => {
    const { run, current, pageSize, params } = baseTableRef.value;
    run({
      ...params,
      current,
      pages: pageSize,
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
    const dataSource = toRef(baseTableRef.value.dataSource, 'dataSource');
    const findInx = dataSource.value.findIndex(
      (item: any) => item[key] === value,
    );
    const currentItem = cloneDeep(dataSource.value[findInx]);
    dataSource.value[findInx] = { ...currentItem, ...updateItem };
  };

  /**
   * 手动运行
   * @return {*}
   */
  const run = (parmas: any) => {
    watch(
      baseTableRef,
      values => {
        if (!values) return;
        const { run: banseRun } = values;
        banseRun({ ...parmas });
      },
      {
        immediate: true,
      },
    );
  };

  return {
    baseTableRef,
    dataSource: computed(() => baseTableRef.value?.dataSource),
    run,
    toSearch,
    toRefresh,
    toUpdate,
    toSingleUpdate,
  };
};
