<template>
  <a-tooltip>
    <template #title>密度</template>
    <a-dropdown>
      <template #title>
        <div>刷新表格</div>
      </template>

      <ColumnHeightOutlined @click.prevent />
      <template #overlay>
        <a-menu
          v-model:selectedKeys="current"
          :items="items"
          @click="onSelect" />
      </template>
    </a-dropdown>
  </a-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ColumnHeightOutlined } from '@ant-design/icons-vue';
const emits = defineEmits(['update:select']);

/**
 * 菜单数据
 * @return {*}
 */
const current = ref<any>(['large']);
const items = ref<any>([
  { label: '默认', key: 'large' },
  { label: '中等', key: 'middle' },
  { label: '紧凑', key: 'small' },
]);
const onSelect = (item: any) => {
  // console.log('data', data);
  current.value = [item.key];
  emits('update:select', item.key);
};
</script>

<style scoped lang="less"></style>
