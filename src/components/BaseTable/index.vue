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
            <template #split>
              <a-divider type="vertical" />
            </template>
            <a-space>
              <slot name="base-extra"></slot>
            </a-space>
            <a-tooltip>
              <template #title>表格斑马纹</template>
              <a-switch
                v-model:checked="isStriped"
                checked-children="开"
                un-checked-children="关" />
            </a-tooltip>
            <a-tooltip>
              <template #title>刷新表格</template>
              <RedoOutlined style="font-size: 16px" @click="toRefresh" />
            </a-tooltip>
            <SizeSelectDropdown v-model:select="size" />
            <SettingPopover
              :default-columns="columns"
              v-model:value="newColumns" />
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
          <template #bodyCell="{ column, text, record, index }">
            <slot
              :name="column.key"
              :column="column"
              :record="record"
              :index="index"
              :text="text"></slot>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SearchBox from './SearchBox.vue';
import SettingPopover from './SettingPopover.vue';
import SizeSelectDropdown from './SizeSelectDropdown.vue';
import BaseFullscreen from '@/components/BaseFullscreen/index.vue';

import { RedoOutlined } from '@ant-design/icons-vue';
import type { TableColumnType } from 'ant-design-vue';
import { isFunction } from 'lodash-es';
import { computed, ref, shallowRef, watch } from 'vue';
import { useTable } from '@/hooks';

/* 接收外部参数 */
interface PropsType {
  title?: string;
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
 * 请求配置相关
 * @return {*}
 */
const service = shallowRef<any>(null);
const serviceOptions = shallowRef<any>({});
const setService = (value: any) => {
  service.value = value;
};
const setServiceOptions = (value: any) => {
  serviceOptions.value = { ...value };
};

/**
 * 获取数据
 * 因为 vue-request 的 usePagination 钩子在初始化时会锁定 options
 * 所以formatResult这里用了回调
 * @return {*}
 */
const newColumns = ref<any>([]);
const size = ref<string>('default');
const {
  loading,
  dataSource,
  current,
  pageSize,
  pagination: initPagination,
  params,
  run,
  refresh,

  // refresh,
  handleTableChange,
  toRefresh,
  toSearch,
  toRemoveRowByIndex,
  toUpdateRowByIndex,
  toUpdateRowFieldByIndex,
  toRemoveRowById,
  toUpdateRowById,
  toUpdateRowFieldById,
} = useTable(() => service.value(), {
  manual: true,
  formatResult: res => serviceOptions.value?.formatResult(res),
});
watch(
  service,
  value => {
    if (!value || !isFunction(value)) return;
    if (!!serviceOptions.value?.manual) return;
    console.log(serviceOptions.value?.manual);
    refresh();
  },
  {
    immediate: true,
  },
);

/**
 * 获取分页配置
 * @param {*} computed
 * @return {*}
 */
const getPagination = computed(() =>
  props.pagination ? initPagination.value : false,
);

/**
 * 是否展示斑马纹
 * @return {*}
 */
const isStriped = ref<boolean>(false);
const isDark = ref<boolean>(false);
const getRowClass = computed(() => (index: number) => {
  if (isDark.value) {
    return index % 2 === 1 && !isStriped.value ? 'table-striped_dark' : null;
  } else {
    return index % 2 === 1 && !isStriped.value ? 'table-striped_light' : null;
  }
});

/**
 * 外部调用
 * @return {*}
 */

defineExpose({
  setService,
  setServiceOptions,
  loading,
  current,
  pageSize,
  dataSource,
  params,
  run,
  toRefresh,
  toSearch,
  toRemoveRowByIndex,
  toUpdateRowByIndex,
  toUpdateRowFieldByIndex,
  toRemoveRowById,
  toUpdateRowById,
  toUpdateRowFieldById,
});
</script>

<style scoped lang="less">
.base-table-container {
  position: relative;
  .card {
    position: relative;
    height: 100%;
    // max-height: 100vh;
    // overflow-y: auto;
    :deep(.ant-card-head-title) {
      overflow: initial;
    }
  }
}
:deep(.ant-table-striped) {
  .table-striped_light {
    background-color: #fafafa;
  }
  .table-striped_dark {
    background-color: rgb(29, 29, 29);
  }
}
</style>
