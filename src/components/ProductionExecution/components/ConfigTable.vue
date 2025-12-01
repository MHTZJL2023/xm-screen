<template>
  <div class="info-section">
    <div class="section-header">
      <span>配置列表</span>
    </div>
    <div class="config-table-container">
      <div class="config-table">
        <div class="table-header">
          <div class="table-cell">序号</div>
          <div class="table-cell">配置分类</div>
          <div class="table-cell">配置内容</div>
          <div class="table-cell">特殊要求</div>
          <div class="table-cell">车间注意事项</div>
          <div class="table-cell">确认人</div>
          <div class="table-cell">操作</div>
        </div>
        <div class="table-body">
          <div class="table-row">
            <div class="table-cell">1</div>
            <div class="table-cell">100000</div>
            <div class="table-cell">ZK6137H1N (01)(00KE052G)</div>
            <div class="table-cell">无</div>
            <div class="table-cell">无</div>
            <div class="table-cell">张三</div>
            <div class="table-cell">
              <div class="action-buttons">
                <div class="action-btn view-btn">查看</div>
                <div class="action-btn edit-btn">修改</div>
              </div>
            </div>
          </div>
          <!-- 可以根据需要添加更多行 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 配置列表表格组件
</script>

<style scoped lang="less">
.config-table-container {
  overflow-x: auto;
}

.config-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;

  .table-header {
    display: flex;
    background: linear-gradient(135deg, rgba(0, 131, 178, 0.7), rgba(0, 90, 130, 0.7));
    border-bottom: 1px solid rgba(0, 131, 178, 0.4);
    font-weight: 600;
    color: #ffffff;
  }

  .table-body {
    .table-row {
      display: flex;
      border-bottom: 1px solid rgba(0, 131, 178, 0.2);
      transition: all 0.3s;

      &:hover {
        background: rgba(0, 131, 178, 0.1);
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .table-cell {
    padding: 12px 15px;
    text-align: left;
    font-size: 13px;
    color: #ffffff;
    border-right: 1px solid rgba(0, 131, 178, 0.2);
    min-width: 100px;
    flex: 1;
    word-break: break-word;

    &:last-child {
      border-right: none;
    }
  }

  .action-buttons {
    display: flex;
    gap: 8px;

    .action-btn {
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      transition: all 0.3s;

      &.view-btn {
        background: rgba(0, 131, 178, 0.6);
        border: 1px solid rgba(0, 131, 178, 0.8);
        color: #ffffff;

        &:hover {
          background: rgba(0, 131, 178, 0.8);
        }
      }

      &.edit-btn {
        background: rgba(255, 165, 0, 0.6);
        border: 1px solid rgba(255, 165, 0, 0.8);
        color: #ffffff;

        &:hover {
          background: rgba(255, 165, 0, 0.8);
        }
      }
    }
  }
}
</style>