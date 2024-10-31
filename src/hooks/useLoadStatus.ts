/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-04-05 17:33:48
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-09-14 17:13:41
 * @FilePath: /matrix/src/hooks/useLoadStatus.ts
 * @Description:
 */
import { ref, shallowRef } from 'vue';
export const useLoadStatus = () => {
  const empty = ref<boolean>(false);
  const loading = ref<boolean>(false);
  const domRef = shallowRef<any>(null);

  // 设置空状态
  const setEmpty = (value?: boolean) => {
    empty.value = Boolean(value);
    domRef.value && domRef.value?.setEmpty && domRef.value?.setEmpty(value);
  };

  // 设置加载状态
  const setLoading = (value?: boolean) => {
    if (value) {
      empty.value = false;
      domRef.value && domRef.value?.setEmpty && domRef.value?.setEmpty(false);
    }
    loading.value = Boolean(value);
    domRef.value && domRef.value?.setLoading && domRef.value?.setLoading(value);
  };
  return {
    empty,
    loading,
    domRef,
    setEmpty,
    setLoading,
  };
};
