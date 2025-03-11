/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-12 17:28:21
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2025-03-11 11:16:32
 * @FilePath: /base-big-screen/src/hooks/useBaseTable.ts
 * @Description:
 */
import { computed, nextTick, shallowRef, watch } from 'vue';

export const useBaseTable = (service?: any, options?: any) => {
  const saveAsyncMethods = shallowRef<any>([]);
  const baseTableRef = shallowRef<any>(null);

  /**
   * @description: 验证初始化是否成功 确保异步执行不会出错
   * @param {Function} callback
   * @return {*}
   */
  const checkInitSuccess = (callback?: any) => {
    const baseTableInstance = baseTableRef?.value;
    if (baseTableInstance) {
      callback && callback(baseTableInstance);
      return baseTableInstance;
    } else {
      callback &&
        saveAsyncMethods.value.push(() => callback(baseTableRef?.value));
      return false;
    }
  };
  watch(
    baseTableRef,
    async value => {
      if (!value) return;
      !!options && value.setServiceOptions(options);
      await nextTick();
      service && value.setService(service);

      saveAsyncMethods.value.forEach((item: any) => {
        item();
      });
      await nextTick();
      saveAsyncMethods.value = [];
    },
    {
      immediate: true,
    },
  );

  /**
   * 查询
   * @param {any} query
   * @return {*}
   */
  const toSearch = (query?: any) => {
    checkInitSuccess(() => {
      baseTableRef.value?.toSearch(query);
    });
  };

  /**
   * 刷新数据
   * 如果isReset为true则重置分页
   * @param {boolean} isReset
   * @return {*}
   */
  const toRefresh = (isReset?: boolean) => {
    checkInitSuccess(() => {
      baseTableRef.value?.toRefresh(isReset);
    });
  };

  /**
   * 更新索引值为index的行内容
   * 不刷新页面
   * @param {object} newItem
   * @param {number} index
   * @return {*}
   */
  const toUpdateRowByIndex = (index: number, newItem: object) => {
    checkInitSuccess(() => {
      baseTableRef.value?.toUpdateRowByIndex(index, newItem);
    });
  };

  /**
   * 更新行数据中单一字段
   * 不刷新页面
   * @param {*} key
   * @param {*} value
   * @param {*} index
   * @return {*}
   */
  const toUpdateRowFieldByIndex = (index: number, key: string, value: any) => {
    checkInitSuccess(() => {
      baseTableRef.value.toUpdateRowFieldByIndex(index, key, value);
    });
  };

  /**
   * 删除行数据
   * @param {number} index
   * @return {*}
   */
  const toRemoveRowByIndex = (index: number) => {
    checkInitSuccess(() => {
      baseTableRef.value.toRemoveRowByIndex(index);
    });
  };

  /**
   * 根据id更新行数
   * @param {object} newItem
   * @param {any} id
   * @return {*}
   */
  const toUpdateRowById = (id: string | number, newItem: object) => {
    checkInitSuccess(() => {
      baseTableRef.value.toUpdateRowById(id, newItem);
    });
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
    checkInitSuccess(() => {
      baseTableRef.value.toUpdateRowFieldById(id, key, value);
    });
  };

  /**
   * 手动设置数据源
   * @param {any} dataSource
   * @return {*}
   */
  const setDataSource = (newData: any) => {
    checkInitSuccess(() => {
      baseTableRef.value.dataSource = [...newData];
    });
  };

  /**
   * @param {any} id
   * @return {*}
   */
  const toRemoveRowById = (id: string | number) => {
    checkInitSuccess(() => {
      baseTableRef.value.toRemoveRowById(id);
    });
  };

  /**
   * 手动运行
   * @return {*}
   */
  const run = (parmas: any) => {
    checkInitSuccess(() => {
      const { run: banseRun } = baseTableRef.value;
      banseRun({ ...parmas });
    });
  };

  /**
   * 设置加载状态
   * @param {boolean} loading
   * @return {*}
   */
  const setLoading = (loading: boolean) => {
    checkInitSuccess(() => {
      baseTableRef.value.loading = loading;
    });
  };

  return {
    baseTableRef,
    dataSource: computed(() => baseTableRef.value?.dataSource),
    setLoading,
    setDataSource,
    run,
    toSearch,
    toRefresh,
    toRemoveRowByIndex,
    toUpdateRowByIndex,
    toUpdateRowFieldByIndex,
    toRemoveRowById,
    toUpdateRowById,
    toUpdateRowFieldById,
  };
};
