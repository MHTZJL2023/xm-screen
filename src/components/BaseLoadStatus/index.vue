<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Empty } from 'ant-design-vue';

interface Props {
  loading?: boolean; // 是否加载
  empty?: boolean; // 是否为空
  description?: string; // 描述
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  empty: false,
  description: '暂无数据'
});

const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;

/**
 * 内部状态管理 监听外部状态变化 更新内部状态
 *
 * @returns {any}
 */
const _loading = ref<any>(props.loading);
const _empty = ref<any>(props.empty);
watch(
  () => props.loading,
  val => {
    _loading.value = val;
  }
);
watch(
  () => props.empty,
  val => {
    _empty.value = val;
  }
);

/**
 * 暴露方法给父组件调用
 *
 * @returns {any}
 */
const emits = defineEmits(['update:loading', 'update:empty']);
const setLoading = (value: boolean) => {
  _loading.value = value;
  emits('update:loading', value);
};
const setEmpty = (value: boolean) => {
  _empty.value = value;
  emits('update:empty', value);
};
defineExpose({
  setLoading,
  setEmpty
});
</script>

<template>
  <div class="status-container">
    <slot v-if="_empty" name="empty">
      <a-empty class="empty" :image="simpleImage" :description="description" />
    </slot>

    <a-spin tip="数据加载中..." :spinning="_loading && !_empty">
      <div :style="{ opacity: _empty ? 0 : 1 }">
        <slot></slot>
      </div>
    </a-spin>
  </div>
</template>

<style scoped lang="less">
.status-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .empty {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  :deep(.ant-spin-container){
    &::after{
      background-color: transparent;
    }
  }
}
</style>
