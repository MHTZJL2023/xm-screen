<template>
  <div>
    <SearchBox>
      <slot name="base-search"></slot>
    </SearchBox>
    <div ref="baseTableRef" class="base-table-container">
      <a-card class="card" :title="title">
        <template #title v-if="!title">
          <slot name="base-title">{{ title }}</slot>
        </template>
        <template #extra>
          <a-space :size="2">
            <a-space>
              <slot name="base-extra"></slot>
            </a-space>

            <a-tooltip>
              <template #title>表格斑马纹</template>
              <a-switch v-model:checked="isStriped" checked-children="开" un-checked-children="关" />
            </a-tooltip>

            <a-divider type="vertical" />
            <a-tooltip>
              <template #title>刷新表格</template>
              <RedoOutlined style="font-size: 16px" @click="toRefresh" />
            </a-tooltip>

            <a-divider type="vertical" />
            <SizeSelectDropdown v-model:select="size" />

            <a-divider type="vertical" />
            <SettingPopover :default-columns="columns" v-model:value="newColumns" />

            <a-divider type="vertical" />
            <BaseFullscreen :fullscreen-ref="baseTableRef" />
          </a-space>
        </template>
        <a-table
          :loading="loading"
          :columns="newColumns"
          :data-source="dataSource"
          :pagination="getPagination"
          :size="size"
          @change="handleTableChange"
          class="ant-table-striped"
          :row-class-name="(_record: any, index: number) => getRowClass(index)"
          v-bind="$attrs">
          <template #bodyCell="{ column, text, record }">
            <slot :name="column.key" :column="column" :record="record" :text="text"></slot>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RedoOutlined } from "@ant-design/icons-vue";
import BaseFullscreen from "@/components/BaseFullscreen/index.vue";
import SizeSelectDropdown from "./SizeSelectDropdown.vue";
import SettingPopover from "./SettingPopover.vue";
import SearchBox from "./SearchBox.vue";

import { computed, ref, watch } from "vue";
import { useTable } from "@/hooks";
import type { TableColumnType } from "ant-design-vue";

/* 接收外部参数 */
interface PropsType {
  tabList?: {tab: string, key: any }[]
  title?: string;
  service: any;
  serviceOptions?: {};
  columns: TableColumnType[];
  pagination?: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  pagination: true,
});

/**
 * @return {*}
 * 实例
 */
const baseTableRef = ref<any>();

/**
 * 获取数据
 * @return {*}
 */
const newColumns = ref<any>([]);
const size = ref<string>("default");
const {
  loading,
  dataSource,
  current,
  pageSize,
  pagination: initPagination,
  params,
  run,
  refresh,
  handleTableChange,
} = useTable(props.service, { ...props.serviceOptions });
const getPagination = computed(() =>
  props.pagination ? initPagination.value : false
);

/**
 * 是否展示斑马纹
 * @return {*}
 */
const isStriped = ref<boolean>(false);
const getRowClass = computed(
  () => (index: number) =>
    index % 2 === 1 && isStriped.value ? "table-striped" : null
);

/**
 * 刷新页面
 * @return {*}
 */
const toRefresh = () => {
  pageSize.value = pageSize.value;
  refresh();
};

/**
 * 外部调用
 * @return {*}
 */

defineExpose({
  current,
  pageSize,
  dataSource,
  params,
  run,
});
</script>

<style scoped lang="less">
.base-table-container {
  position: relative;
  .card {
    position: relative;
    height: 100%;
    max-height: 100vh;
    overflow-y: auto;
    :deep(.ant-card-head-title){
      overflow: initial;
    }
  }
}

.css-dev-only-do-not-override-19iuou
  .ant-table-striped
  :deep(.table-striped)
  td {
  background-color: #fafafa;
}

.css-dev-only-do-not-override-1qk47um
  .ant-table-striped
  :deep(.table-striped)
  td {
  background-color: rgb(29, 29, 29);
}
</style>
