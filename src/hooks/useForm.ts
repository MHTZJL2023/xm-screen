/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-13 10:56:56
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 18:02:39
 * @FilePath: /vite-project/src/hooks/useForm.ts
 * @Description:
 */
import { ref } from 'vue';
export const useForm = () => {
  const formRef = ref<any>(null); // 实例
  const formState = ref<any>({}); // 数据

  /**
   * 重置数据
   * @return {*}
   */
  const toReset = () => {
    formRef.value?.resetFields();
  };

  /**
   * 更新数据
   * @param {*} data
   * @param {*} isReplace // 是否完全替换
   * @return {*}
   */
  const toSetState = (data: any, isReplace?: boolean) => {
    if (isReplace) {
      formState.value = { ...data };
    } else {
      formState.value = { ...formState.value, ...data };
    }
    console.log('xxxxx', data);
  };

  /**
   * 更新单一数据
   * @param {string} key
   * @param {any} value
   * @return {*}
   */
  const toSingleSetState = (key: string, value: any) => {
    formState.value[key] = value;
  };

  /**
   * 提交数据
   * @return {*}
   */
  const submit = async () => {
    await formRef.value?.validate();
    return { ...formState.value };
  };

  // /**
  //  * 查询
  //  *
  //  * @return {*}
  //  */
  // const emits = defineEmits(['search']);
  // const toSearch = async (isReset?: boolean) => {
  //   await submit();
  //   emits('search', formState.value);
  // };

  return {
    formRef,
    formState,
    // toSearch,
    toReset,
    toSetState,
    toSingleSetState,
    submit,
  };
};
