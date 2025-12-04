<template>
  <div class="info-section">
    <div class="section-header">
      <span>配置列表</span>
    </div>

    <div class="config-table-container">
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        @change="handleTableChange"
        bordered
        size="small"
        row-key="id"
        class="config-table">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <div class="action-buttons">
              <a-button type="primary" size="small" class="view-btn">
                查看
              </a-button>
              <a-button type="default" size="small" class="edit-btn">
                修改
              </a-button>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableColumnsType } from 'ant-design-vue';
import { ref } from 'vue';

const pagination = ref({
  pageSize: 3,
  current: 1,
  showSizeChanger: false,
  showQuickJumper: true,
  showTotal: (total: number) => `共 ${total} 条数据`,
});

// 定义表格数据类型
interface ConfigItem {
  id: number;
  serial: number;
  category: string;
  content: string;
  specialRequirements: string;
  workshopNotes: string;
  confirmer: string;
}

// 表格列配置
const columns: TableColumnsType<ConfigItem> = [
  {
    title: '序号',
    dataIndex: 'serial',
    key: 'serial',
    width: 80,
  },
  {
    title: '配置分类',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '配置内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '特殊要求',
    dataIndex: 'specialRequirements',
    key: 'specialRequirements',
  },
  {
    title: '车间注意事项',
    dataIndex: 'workshopNotes',
    key: 'workshopNotes',
  },
  {
    title: '确认人',
    dataIndex: 'confirmer',
    key: 'confirmer',
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    fixed: 'right',
  },
];

// 处理表格分页、排序、筛选变化
const handleTableChange = (tablePagination: any) => {
  // 更新分页状态
  pagination.value = {
    ...pagination.value,
    current: tablePagination.current,
    pageSize: tablePagination.pageSize,
  };
};

// 表格数据源
const dataSource = ref<ConfigItem[]>([
  {
    id: 1,
    serial: 1,
    category: '100000',
    content: 'ZK6137H1N (01)(00KE052G)',
    specialRequirements: '无',
    workshopNotes: '无',
    confirmer: '张三',
  },
  {
    id: 2,
    serial: 2,
    category: '100001',
    content: 'ZK6127H2N (02)(00KE053G)',
    specialRequirements: '需要特殊安装',
    workshopNotes: '注意安装顺序',
    confirmer: '李四',
  },
  {
    id: 3,
    serial: 3,
    category: '100002',
    content: 'ZK6117H3N (03)(00KE054G)',
    specialRequirements: '无',
    workshopNotes: '无',
    confirmer: '王五',
  },
  {
    id: 4,
    serial: 4,
    category: '100003',
    content: 'ZK6107H4N (04)(00KE055G)',
    specialRequirements: '需要额外测试',
    workshopNotes: '测试后再安装',
    confirmer: '赵六',
  },
  {
    id: 5,
    serial: 5,
    category: '100004',
    content: 'ZK6097H5N (05)(00KE056G)',
    specialRequirements: '无',
    workshopNotes: '无',
    confirmer: '孙七',
  },
  {
    id: 6,
    serial: 6,
    category: '100005',
    content: 'ZK6087H6N (06)(00KE057G)',
    specialRequirements: '需要特殊工具',
    workshopNotes: '准备好工具再施工',
    confirmer: '周八',
  },

  // 可以根据需要添加更多数据
]);
</script>

<style scoped lang="less">
.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: linear-gradient(
    135deg,
    rgba(0, 131, 178, 0.6),
    rgba(0, 90, 130, 0.6)
  );
  border-bottom: 1px solid rgba(0, 131, 178, 0.4);
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid rgba(0, 131, 178, 0.4);
  border-radius: 4px;
}

.config-table-container {
  overflow-x: auto;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 30, 60, 0.6));
  padding: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 1px solid rgba(0, 131, 178, 0.4);
  border-left: 1px solid rgba(0, 131, 178, 0.4);
  border-bottom: 1px solid rgba(0, 131, 178, 0.4);
}

.config-table {
  width: 100%;
  background: transparent;

  :deep(.ant-table-thead > tr > th) {
    background: linear-gradient(
      135deg,
      rgba(0, 131, 178, 0.7),
      rgba(0, 90, 130, 0.7)
    );
    color: #ffffff;
    border-bottom: 1px solid rgba(0, 131, 178, 0.4);
    font-weight: 600;
    font-size: 13px;
  }

  :deep(.ant-table-tbody > tr > td) {
    background: transparent;
    color: #ffffff;
    border-bottom: 1px solid rgba(0, 131, 178, 0.2);
    font-size: 13px;
  }

  :deep(.ant-table-tbody > tr:hover > td) {
    background: rgba(0, 131, 178, 0.1) !important;
  }

  :deep(.ant-table-bordered .ant-table-thead > tr > th) {
    border-right: 1px solid rgba(0, 131, 178, 0.2);
  }

  :deep(.ant-table-bordered .ant-table-tbody > tr > td) {
    border-right: 1px solid rgba(0, 131, 178, 0.2);
  }

  :deep(.ant-btn) {
    font-size: 12px;
    padding: 4px 10px;
  }

  :deep(.ant-btn-primary) {
    background: rgba(0, 131, 178, 0.6);
    border-color: rgba(0, 131, 178, 0.8);
    color: #ffffff;

    &:hover,
    &:focus {
      background: rgba(0, 131, 178, 0.8);
      border-color: rgba(0, 131, 178, 1);
    }
  }

  :deep(.ant-btn-default) {
    background: rgba(255, 165, 0, 0.6);
    border-color: rgba(255, 165, 0, 0.8);
    color: #ffffff;

    &:hover,
    &:focus {
      background: rgba(255, 165, 0, 0.8);
      border-color: rgba(255, 165, 0, 1);
    }
  }
}

.action-buttons {
  display: flex;
  gap: 8px;
}
</style>
