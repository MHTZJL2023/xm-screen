<template>
  <div class="info-section">
    <div class="section-header">
      <span>基础信息</span>
      <div class="nav-tab">查看订单流程图</div>
      <div class="nav-tab">查看技术协议</div>
      <div class="search-input-wrapper">
        <input type="text" placeholder="请输入..." class="search-input" />
        <div class="search-btn">搜索</div>
      </div>
      <div class="refresh-btn">刷新</div>

      <div class="order-info">
        <div class="order-item">
          <span class="order-label">订单号：</span>
          <span class="order-value">5302-00001</span>
        </div>
        <div class="order-item">
          <span class="order-label">车号：</span>
          <span class="order-value">20250007</span>
        </div>
      </div>
    </div>

    <div class="info-table">
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">车型</span>
          <span class="cell-value">ZK6137H1N (01)(00KE052G)</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">零件号</span>
          <span class="cell-value">P086</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">车型分组</span>
          <span class="cell-value">中</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">额定载客</span>
          <span class="cell-value">54</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">配置序号</span>
          <span class="cell-value">20250007</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">加工单号</span>
          <span class="cell-value">00020009572</span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">图纸特殊要求</span>
          <span class="cell-value">
            空调与车身颜色一致 新世代Y100048 有侧跪功能，具体参见图纸.
          </span>
        </div>
        <div class="table-cell">
          <span class="cell-label">车身图号</span>
          <span class="cell-value">0002.或灰白/灰 具体实</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">漆种类</span>
          <span class="cell-value">国产金属漆</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">彩条数量</span>
          <span class="cell-value">2</span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">送车方</span>
          <span class="cell-value">
            000044830/修武县鸿运汽车运输有限公司/河南省焦作市修武县红旗路38号修武汽车园/中国-广东--湛
          </span>
        </div>
        <div class="table-cell">
          <span class="cell-label">选配基本号</span>
          <span class="cell-value">53053-5280-31168/不带产品铭牌+少J</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">接单日期</span>
          <span class="cell-value">2025-06-07</span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">其他特殊要求</span>
          <span class="cell-value">无指标拆分和法表需求</span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">打印注意</span>
          <span class="cell-value">
            V型焊风窗墙,在标识基线基础上,两端间隙应放收线（分别放零线,
            整车左前、前门、中门、前墙一
          </span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">更改号（车间注意）</span>
          <span class="cell-value">
            44470-10-E1, ZK6137N产品底盘(如前订单号14414变更为30-211764, (
          </span>
        </div>
        <div class="table-cell">
          <span class="cell-label">信息公开编号</span>
          <span class="cell-value"></span>
        </div>
        <div class="table-cell">
          <span class="cell-label">环保信息车系清单发布时间</span>
          <span class="cell-value"></span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">备注</span>
          <span class="cell-value">
            1、承装车间排查：此订单前围蒙皮外饰件5302-14414变更为30-211764，（
          </span>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <span class="cell-label">一车一单</span>
          <span class="cell-value">442762, 444679</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">产地</span>
          <span class="cell-value">N</span>
        </div>
        <div class="table-cell">
          <span class="cell-label">合同号</span>
          <span class="cell-value"></span>
        </div>
        <div class="table-cell">
          <span class="cell-label">发动机软件标定识别号</span>
          <span class="cell-value"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 信息表格组件
</script>

<style scoped lang="less">
.info-section {
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 30, 60, 0.8));
  border: 1px solid rgba(0, 131, 178, 0.4);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  overflow: hidden;

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

    .nav-tab {
      padding: 6px 15px;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 30, 60, 0.6)
      );
      border: 1px solid rgba(0, 131, 178, 0.4);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);

      &:hover {
        color: #ffffff;
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 131, 178, 0.4)
        );
        border-color: rgba(0, 131, 178, 0.6);
      }
    }
  }
}

.info-table {
  padding: 15px;

  .table-row {
    display: flex;
    // gap: 15px;
    // margin-bottom: 15px;
    align-items: center;
    height: 50px;
    flex-wrap: wrap;
    // border: 1px solid rgba(255, 255, 255, 0.141);
    // padding: 0 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .table-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    min-width: 200px;
    // padding: 0 10px;
    height: 100%;
    flex: 1;
    border: 1px solid rgba(255, 255, 255, 0.141);

    .cell-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      min-width: 80px;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 5px;
      background-color: rgba(255, 255, 255, 0.141);
    }

    .cell-value {
      color: #ffffff;
      font-size: 14px;
      word-break: break-word;
      flex: 1;
    }
  }
}

.search-input-wrapper {
  display: flex;
  align-items: center;

  .search-input {
    padding: 8px 12px;
    background: rgba(40, 50, 90, 0.9);
    border: 1px solid rgba(0, 131, 178, 0.4);
    border-radius: 6px 0 0 6px;
    color: #ffffff;
    outline: none;
    font-size: 13px;
    min-width: 150px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .search-btn {
    padding: 8px 8px;
    margin-left: 5px;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 30, 60, 0.6)
    );
    border: 1px solid rgba(0, 131, 178, 0.4);
    border-left: none;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
      color: #ffffff;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 131, 178, 0.4)
      );
      border-color: rgba(0, 131, 178, 0.6);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }
}

.refresh-btn {
  padding: 8px 8px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 30, 60, 0.6));
  border: 1px solid rgba(0, 131, 178, 0.4);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #ffffff;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 131, 178, 0.4)
    );
    border-color: rgba(0, 131, 178, 0.6);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
}

.order-info {
  display: flex;
  gap: 30px;
  margin-left: auto;

  .order-item {
    display: flex;
    align-items: center;
    gap: 10px;

    .order-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .order-value {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
