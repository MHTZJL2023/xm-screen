<template>
  <a-modal
    class="my-modal"
    title="金龙车间执行系统"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('close')"
    width="1500px"
    centered>
    <template #title>
      <div class="modal-title">
        <span>金龙车间执行系统</span>
      </div>
    </template>
    <div class="details-info-container">
      <!-- 车型信息表格 -->
      <InfoTable />

      <!-- 配置列表表格 -->
      <ConfigTable />
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import ConfigTable from './ConfigTable.vue';
import InfoTable from './InfoTable.vue';

interface PropsType {
  visible: boolean;
}
const props = defineProps<PropsType>();
const emits = defineEmits(['close']);
</script>

<style scoped lang="less">
/* 模态框样式 */
.my-modal {
  .ant-modal-content {
    background: rgba(0, 15, 30, 0.95);
    border: 1px solid rgba(0, 131, 178, 0.4);
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  }

  .ant-modal-header {
    background: linear-gradient(
      135deg,
      rgba(0, 131, 178, 0.8),
      rgba(0, 90, 130, 0.8)
    );
    border-bottom: 1px solid rgba(0, 131, 178, 0.4);
    border-radius: 8px 8px 0 0;
  }

  .ant-modal-title {
    color: #ffffff;
    font-weight: 600;
  }

  .ant-modal-body {
    background: rgba(0, 15, 30, 0.95);
    padding: 0;
    border-radius: 0 0 8px 8px;
  }
}

.modal-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
}

/* 详情信息容器 */
.details-info-container {
  padding: 20px;
  background: #001529;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}
</style>
