<template>
  <a-modal
    class="my-modal"
    title="金龙车间执行系统"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('colse')"
    width="1500px"
    centered>
    <div class="production-execution">
      <!-- 顶部导航 -->
      <div class="top-nav">
        <div class="nav-tabs">
          <div class="nav-tab">产前学习</div>
          <div class="nav-tab active">产中执行</div>
          <div class="nav-tab">产后分析</div>
        </div>
        <div class="order-info">
          <span class="order-label" @click="onOrderClick">销售订单:</span>
          <span class="order-value" @click="onOrderClick">
            421567298444N-0520
          </span>
          <span class="order-label">项目类型:</span>
          <span class="order-value">ETO</span>
          <span class="order-label">交货日期:</span>
          <span class="order-value">2024-05-20</span>
          <span class="order-label">实施阶段:</span>
          <span class="order-value">中试阶段</span>
          <span class="order-label">实施地点:</span>
          <span class="order-value">山东省-临沂市</span>
        </div>
      </div>

      <!-- 主要内容 -->
      <div class="main-container">
        <!-- 左侧订单列表 -->
        <div class="left-panel">
          <div class="search-box">
            <div class="search-input-wrapper">
              <span class="search-icon">🔍</span>
              <input type="text" placeholder="输入..." class="search-input" />
            </div>
          </div>
          <div class="order-list">
            <div
              class="order-item-container"
              v-for="item in orderList"
              :key="item">
              <div
                class="order-item"
                :class="{ active: activeOrder === item }"
                @click="activeOrder = item">
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧内容区 -->
        <div class="right-panel">
          <!-- 第一排 -->
          <div class="content-row">
            <!-- 订单策划 -->
            <div class="card">
              <div class="card-header">
                <h3>订单策划</h3>
              </div>
              <div class="card-content">
                <div class="card-grid">
                  <div class="nav-require">
                    <span class="btn-icon">📋</span>
                    特殊要求
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">⚠️</span>
                    历史问题
                  </div>
                </div>
              </div>
            </div>

            <!-- 人员状态 -->
            <div class="card">
              <div class="card-header">
                <h3>人员状态</h3>
              </div>
              <div class="card-content">
                <div class="status-buttons">
                  <div class="status-btn status-blue">
                    <span>0</span>
                    <span class="label">已到岗</span>
                  </div>
                  <div class="status-btn status-green">
                    <span>0</span>
                    <span class="label">实际</span>
                  </div>
                  <div class="status-btn status-yellow">
                    <span>0</span>
                    <span class="label">应到</span>
                  </div>
                  <div class="status-btn status-red">
                    <span>0</span>
                    <span class="label">未到</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 作业指导 -->
            <div class="card">
              <div class="card-header">
                <h3>作业指导</h3>
              </div>
              <div class="card-content">
                <div class="button-group">
                  <div class="nav-require">
                    <span class="btn-icon">📋</span>
                    图纸
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">📋</span>
                    配置
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">📋</span>
                    工艺卡
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 第二排 -->
          <div class="content-row">
            <!-- 物料 -->
            <div class="card">
              <div class="card-header" style="display: flex">
                <h3>物料</h3>
                <h3 style="margin-left: 45%">| 配置</h3>
              </div>
              <div class="card-content">
                <div class="card-grid">
                  <div class="nav-require">
                    <span class="btn-icon">📋</span>
                    物料清单
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">⭐</span>
                    配置
                  </div>
                </div>
              </div>
            </div>

            <!-- 变更 -->
            <div class="card">
              <div class="card-header">
                <h3>变更</h3>
              </div>
              <div class="card-content">
                <div class="card-grid">
                  <div class="nav-require">
                    <span class="btn-icon">�</span>
                    工程变更
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">👥</span>
                    人员变更
                  </div>
                </div>
              </div>
            </div>

            <!-- 公告信息 -->
            <div class="card">
              <div class="card-header">
                <h3>公告信息</h3>
              </div>
              <div class="card-content">
                <div class="button-group">
                  <div class="btn btn-green">
                    <span class="btn-icon">🚌</span>
                    车调公告
                  </div>
                  <div class="btn btn-green">
                    <span class="btn-icon">🌍</span>
                    环保通知
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 第三排 -->
          <div class="content-row1" style="display: flex; gap: 20px">
            <!-- 过程验证 -->
            <div class="card" style="width: 30%; height: 90%">
              <div class="card-header">
                <h3>过程验证</h3>
              </div>
              <div class="card-content">
                <div class="button-group">
                  <div class="nav-require">
                    <span class="btn-icon">🔍</span>
                    自检
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">🔄</span>
                    互检
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">✅</span>
                    专检
                  </div>
                </div>
              </div>
            </div>

            <!-- 常用操作 -->
            <div class="card" style="width: 65%; height: 90%">
              <div class="card-header">
                <h3>常用操作</h3>
              </div>
              <div class="card-content">
                <div class="button-group">
                  <div class="nav-require">
                    <span class="btn-icon">⚠️</span>
                    异常反馈
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">⏱️</span>
                    工时报工
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">📞</span>
                    到离岗
                  </div>
                  <div class="nav-require">
                    <span class="btn-icon">🚌</span>
                    在制车辆
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-modal>
  <DetailsInfo :visible="visibleInfo" />
</template>

<script setup lang="ts">
import DetailsInfo from './components/DetailsInfo.vue';

import { ref } from 'vue';

interface PropsType {
  visible: boolean;
}
const props = defineProps<PropsType>();

// 订单状态管理
const activeOrder = ref('20240504N-0220');

// 模拟订单数据
const orderList = [
  '20240504N-0220',
  '20240504N-0231',
  '20240507N-0086',
  '20240507N-0089',
  '20240508N-0017',
  '20240510N-0037',
  '20240517N-0036',
  '20240517N-0038',
];

const visibleInfo = ref(false);
const onOrderClick = () => {
  visibleInfo.value = true;
};
</script>

<style lang="less" scoped>
.production-execution {
  width: 100%;
  height: 70vh;
  background-color: #001529;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;

  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    padding: 15px 15px;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 30, 60, 0.8)
    );
    border-radius: 10px;
    border: 1px solid rgba(0, 131, 178, 0.4);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

    .nav-tabs {
      display: flex;
      gap: 12px;

      .nav-tab {
        height: 100%;
        padding: 10px 24px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.6),
          rgba(0, 30, 60, 0.6)
        );
        color: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

        &:hover {
          color: #fff;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 131, 178, 0.4)
          );
          border-color: rgba(0, 131, 178, 0.6);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        &.active {
          color: #fff;
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

    .order-info {
      display: flex;
      gap: 24px;
      font-size: 14px;

      .order-label {
        color: rgba(255, 255, 255, 0.7);
      }

      .order-value {
        color: #fff;
        font-weight: 600;
      }
    }
  }

  .main-container {
    display: flex;
    gap: 20px;
    height: calc(100vh - 120px);
    padding: 20px 0;

    .left-panel {
      width: 200px;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 30, 60, 0.8)
      );
      border: 1px solid rgba(0, 131, 178, 0.4);
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

      .search-box {
        margin-bottom: 15px;
      }
      .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background: rgba(40, 50, 90, 0.9);
        border: 1px solid rgba(0, 160, 220, 0.6);
        border-radius: 8px;
        padding: 8px 12px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      .search-icon {
        margin-right: 8px;
        color: rgba(0, 160, 220, 0.8);
        font-size: 16px;
      }
      .search-input {
        flex: 1;
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        outline: none;
      }
      .search-input::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      .order-list {
        flex: 1;
        overflow-y: auto;

        .order-item-container {
          margin-bottom: 8px;
        }
        .order-item {
          display: block;
          width: calc(100% -20px);
          padding: 10px;
          background: linear-gradient(
            to bottom,
            rgba(40, 50, 90, 0.9),
            rgba(35, 45, 85, 0.9)
          );
          border: 1px solid rgba(0, 160, 220, 0.4);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        .order-item:hover {
          background: linear-gradient(
            to bottom,
            rgba(50, 60, 100, 0.95),
            rgba(45, 55, 95, 0.95)
          );
          border-color: rgba(0, 180, 240, 0.6);
          box-shadow: 0 2px 8px rgba(0, 180, 240, 0.4);
          transform: translateY(-1px);
        }
        .order-item.active {
          background: linear-gradient(
            to bottom,
            rgba(0, 160, 220, 0.7),
            rgba(0, 140, 200, 0.7)
          );
          border-color: rgba(0, 180, 240, 0.8);
          box-shadow: 0 4px 12px rgba(0, 180, 240, 0.5);
        }

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(0, 131, 178, 0.5);
          border-radius: 3px;
        }
      }
    }

    .middle-panel {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 20px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(0, 131, 178, 0.5);
        border-radius: 4px;
      }
    }

    .right-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(0, 131, 178, 0.5);
        border-radius: 4px;
      }

      .content-row {
        display: flex;
        gap: 20px;
        width: 100%;

        .card {
          flex: 1;
        }
      }
    }

    .card {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 30, 60, 0.6)
      );
      border: 1px solid rgba(0, 131, 178, 0.3);
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
    }

    .card-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 10px;
    }

    .card-header {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0, 131, 178, 0.3);
    }

    .card-content {
      flex: 1;
    }

    .status-buttons {
      display: flex;
      gap: 10px;
      justify-content: space-between;
    }

    .status-btn {
      // flex: 1;
      min-width: 80px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-size: 28px;
      font-weight: 800;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .status-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.05)
      );
      z-index: 1;
    }

    .status-btn span {
      position: relative;
      z-index: 2;
    }

    .status-btn .label {
      font-size: 12px;
      font-weight: 600;
      margin-top: 0px;
    }

    .status-blue {
      background: linear-gradient(
        135deg,
        rgba(0, 100, 255, 0.8),
        rgba(0, 60, 200, 0.8)
      );
      border: 1px solid rgba(0, 131, 178, 0.6);
      box-shadow: 0 4px 12px rgba(0, 100, 255, 0.4);
    }

    .status-green {
      background: linear-gradient(
        135deg,
        rgba(0, 200, 100, 0.8),
        rgba(0, 150, 70, 0.8)
      );
      border: 1px solid rgba(0, 200, 100, 0.6);
      box-shadow: 0 4px 12px rgba(0, 200, 100, 0.4);
    }

    .status-yellow {
      background: linear-gradient(
        135deg,
        rgba(255, 200, 0, 0.8),
        rgba(200, 150, 0, 0.8)
      );
      border: 1px solid rgba(255, 200, 0, 0.6);
      box-shadow: 0 4px 12px rgba(255, 200, 0, 0.4);
    }

    .status-red {
      background: linear-gradient(
        135deg,
        rgba(255, 50, 50, 0.8),
        rgba(200, 30, 30, 0.8)
      );
      border: 1px solid rgba(255, 50, 50, 0.6);
      box-shadow: 0 4px 12px rgba(255, 50, 50, 0.4);
    }

    .status-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 10px;
      width: 100%;
    }

    .btn {
      padding: 14px 10px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 1px solid transparent;
      background: linear-gradient(
        135deg,
        rgba(40, 50, 90, 0.9),
        rgba(30, 40, 80, 0.9)
      );
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .btn:hover {
      background: linear-gradient(
        135deg,
        rgba(0, 131, 178, 0.7),
        rgba(0, 100, 150, 0.7)
      );
      border-color: rgba(0, 180, 240, 0.6);
      box-shadow: 0 4px 12px rgba(0, 180, 240, 0.4);
      transform: translateY(-1px);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }

    .btn-blue {
      width: 70px;
      height: 100%;
      border-color: rgba(0, 131, 178, 0.4);
      background: linear-gradient(
        135deg,
        rgba(0, 100, 200, 0.7),
        rgba(0, 60, 150, 0.7)
      );
      box-shadow: 0 3px 10px rgba(0, 100, 200, 0.3);
    }

    .btn-blue:hover {
      background: linear-gradient(
        135deg,
        rgba(0, 131, 178, 0.8),
        rgba(0, 100, 150, 0.8)
      );
      box-shadow: 0 5px 14px rgba(0, 131, 178, 0.4);
    }

    .btn-green {
      border-color: rgba(0, 180, 100, 0.4);
      background: linear-gradient(
        135deg,
        rgba(0, 150, 100, 0.7),
        rgba(0, 100, 70, 0.7)
      );
      box-shadow: 0 3px 10px rgba(0, 150, 100, 0.3);
    }

    .btn-green:hover {
      background: linear-gradient(
        135deg,
        rgba(0, 200, 120, 0.8),
        rgba(0, 150, 90, 0.8)
      );
      box-shadow: 0 5px 14px rgba(0, 200, 120, 0.4);
    }

    .btn-yellow {
      border-color: rgba(255, 200, 0, 0.4);
      background: linear-gradient(
        135deg,
        rgba(200, 150, 0, 0.7),
        rgba(150, 120, 0, 0.7)
      );
      box-shadow: 0 3px 10px rgba(200, 150, 0, 0.3);
    }

    .btn-yellow:hover {
      background: linear-gradient(
        135deg,
        rgba(255, 220, 0, 0.8),
        rgba(200, 170, 0, 0.8)
      );
      box-shadow: 0 5px 14px rgba(255, 220, 0, 0.4);
    }

    .btn-red {
      border-color: rgba(255, 80, 80, 0.4);
      background: linear-gradient(
        135deg,
        rgba(200, 60, 60, 0.7),
        rgba(150, 40, 40, 0.7)
      );
      box-shadow: 0 3px 10px rgba(200, 60, 60, 0.3);
    }

    .btn-red:hover {
      background: linear-gradient(
        135deg,
        rgba(255, 100, 100, 0.8),
        rgba(200, 80, 80, 0.8)
      );
      box-shadow: 0 5px 14px rgba(255, 100, 100, 0.4);
    }

    .btn-orange {
      border-color: rgba(255, 150, 0, 0.4);
      background: linear-gradient(
        135deg,
        rgba(200, 120, 0, 0.7),
        rgba(150, 90, 0, 0.7)
      );
      box-shadow: 0 3px 10px rgba(200, 120, 0, 0.3);
    }

    .btn-orange:hover {
      background: linear-gradient(
        135deg,
        rgba(255, 180, 0, 0.8),
        rgba(200, 150, 0, 0.8)
      );
      box-shadow: 0 5px 14px rgba(255, 180, 0, 0.4);
    }

    .nav-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
    }

    .nav-tab {
      display: flex;
      gap: 10px;
      padding: 10px 10px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(
        135deg,
        rgba(40, 50, 90, 0.9),
        rgba(30, 40, 80, 0.9)
      );
      border: 1px solid rgba(0, 131, 178, 0.3);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    .nav-tab:hover {
      background: linear-gradient(
        135deg,
        rgba(50, 60, 100, 0.95),
        rgba(40, 50, 90, 0.95)
      );
      border-color: rgba(0, 180, 240, 0.5);
      color: #fff;
    }

    .nav-tab.active {
      background: linear-gradient(
        135deg,
        rgba(0, 131, 178, 0.7),
        rgba(0, 100, 150, 0.7)
      );
      border-color: rgba(0, 180, 240, 0.6);
      color: #fff;
      box-shadow: 0 4px 12px rgba(0, 180, 240, 0.4);
    }

    .nav-require {
      display: flex;
      height: 80%;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 10px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(
        135deg,
        rgba(40, 50, 90, 0.9),
        rgba(30, 40, 80, 0.9)
      );
      border: 1px solid rgba(0, 131, 178, 0.3);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    .nav-require:hover {
      background: linear-gradient(
        135deg,
        rgba(50, 60, 100, 0.95),
        rgba(40, 50, 90, 0.95)
      );
      border-color: rgba(0, 180, 240, 0.5);
      color: #fff;
    }

    .nav-require.active {
      background: linear-gradient(
        135deg,
        rgba(0, 131, 178, 0.7),
        rgba(0, 100, 150, 0.7)
      );
      border-color: rgba(0, 180, 240, 0.6);
      color: #fff;
      box-shadow: 0 4px 12px rgba(0, 180, 240, 0.4);
    }

    .tab-content {
      background: rgba(0, 20, 40, 0.5);
      border: 1px solid rgba(0, 131, 178, 0.3);
      border-radius: 8px;
      padding: 15px;
      min-height: 200px;
    }

    .card {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 30, 60, 0.6)
      );
      border: 1px solid rgba(0, 131, 178, 0.3);
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      .card-header {
        margin-bottom: 15px;

        h3 {
          margin: 0;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }
      }

      .card-body {
        .card-tabs {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;

          .tab-btn {
            padding: 14px 28px;
            border: 1px solid rgba(0, 160, 220, 0.6);
            background: linear-gradient(
              135deg,
              rgba(0, 20, 40, 0.9),
              rgba(0, 50, 100, 0.9)
            );
            color: #fff;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);

            &:hover {
              background: linear-gradient(
                135deg,
                rgba(0, 30, 60, 0.9),
                rgba(0, 180, 240, 0.7)
              );
              border-color: rgba(0, 180, 240, 0.8);
              transform: translateY(-3px);
              box-shadow: 0 5px 18px rgba(0, 180, 240, 0.4);
            }

            &.active {
              background: linear-gradient(
                135deg,
                rgba(0, 30, 60, 0.9),
                rgba(0, 180, 240, 0.7)
              );
              border-color: rgba(0, 180, 240, 0.8);
              box-shadow: 0 5px 18px rgba(0, 180, 240, 0.4);
            }

            .btn-icon {
              font-size: 20px;
            }
          }
        }

        .status-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
          padding: 10px 0;

          .status-btn {
            min-width: 120px;
            height: 50px;
            border: 2px solid;
            border-radius: 12px;
            font-size: 36px;
            font-weight: 800;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

            &:hover {
              transform: translateY(-4px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8);
            }

            &.blue {
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.95),
                rgba(24, 144, 255, 0.9)
              );
              border-color: rgba(24, 144, 255, 0.9);
              box-shadow: 0 4px 15px rgba(24, 144, 255, 0.4);
            }

            &.green {
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.95),
                rgba(82, 196, 26, 0.9)
              );
              border-color: rgba(82, 196, 26, 0.9);
              box-shadow: 0 4px 15px rgba(82, 196, 26, 0.4);
            }

            &.cyan {
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.95),
                rgba(19, 194, 194, 0.9)
              );
              border-color: rgba(19, 194, 194, 0.9);
              box-shadow: 0 4px 15px rgba(19, 194, 194, 0.4);
            }

            &.red {
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.95),
                rgba(255, 77, 79, 0.9)
              );
              border-color: rgba(255, 77, 79, 0.9);
              box-shadow: 0 4px 15px rgba(255, 77, 79, 0.4);
            }
          }
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
          height: auto;

          .guide-btn,
          .notice-btn,
          .inspection-btn,
          .operation-btn {
            flex: 1;
            min-width: 100px;
            padding: 14px 10px;
            border: 1px solid rgba(0, 160, 220, 0.6);
            background: linear-gradient(
              135deg,
              rgba(0, 20, 40, 0.9),
              rgba(0, 50, 100, 0.9)
            );
            color: #fff;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);

            &:hover {
              background: linear-gradient(
                135deg,
                rgba(0, 30, 60, 0.9),
                rgba(0, 180, 240, 0.7)
              );
              border-color: rgba(0, 180, 240, 0.8);
              transform: translateY(-3px);
              box-shadow: 0 5px 18px rgba(0, 180, 240, 0.4);
            }
          }

          .guide-btn {
            &:nth-child(1) {
              border-color: rgba(24, 144, 255, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(24, 144, 255, 0.3)
              );
              box-shadow: 0 3px 12px rgba(24, 144, 255, 0.3);
            }

            &:nth-child(2) {
              border-color: rgba(82, 196, 26, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(82, 196, 26, 0.3)
              );
              box-shadow: 0 3px 12px rgba(82, 196, 26, 0.3);
            }

            &:nth-child(3) {
              border-color: rgba(255, 170, 0, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(255, 170, 0, 0.3)
              );
              box-shadow: 0 3px 12px rgba(255, 170, 0, 0.3);
            }
          }

          .notice-btn {
            &.bus {
              border-color: rgba(24, 144, 255, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(24, 144, 255, 0.3)
              );
              box-shadow: 0 3px 12px rgba(24, 144, 255, 0.3);
            }

            &.env {
              border-color: rgba(82, 196, 26, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(82, 196, 26, 0.3)
              );
              box-shadow: 0 3px 12px rgba(82, 196, 26, 0.3);
            }
          }

          .inspection-btn {
            &:nth-child(1) {
              border-color: rgba(24, 144, 255, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(24, 144, 255, 0.3)
              );
              box-shadow: 0 3px 12px rgba(24, 144, 255, 0.3);
            }

            &:nth-child(2) {
              border-color: rgba(82, 196, 26, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(82, 196, 26, 0.3)
              );
              box-shadow: 0 3px 12px rgba(82, 196, 26, 0.3);
            }

            &:nth-child(3) {
              border-color: rgba(255, 170, 0, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(255, 170, 0, 0.3)
              );
              box-shadow: 0 3px 12px rgba(255, 170, 0, 0.3);
            }
          }

          .operation-btn {
            &.abnormal {
              border-color: rgba(255, 77, 79, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(255, 77, 79, 0.3)
              );
              box-shadow: 0 3px 12px rgba(255, 77, 79, 0.3);
            }

            &.report {
              border-color: rgba(82, 196, 26, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(82, 196, 26, 0.3)
              );
              box-shadow: 0 3px 12px rgba(82, 196, 26, 0.3);
            }

            &.arrival {
              border-color: rgba(255, 170, 0, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(255, 170, 0, 0.3)
              );
              box-shadow: 0 3px 12px rgba(255, 170, 0, 0.3);
            }

            &.help {
              border-color: rgba(24, 144, 255, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(24, 144, 255, 0.3)
              );
              box-shadow: 0 3px 12px rgba(24, 144, 255, 0.3);
            }

            &.tool {
              border-color: rgba(19, 194, 194, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(19, 194, 194, 0.3)
              );
              box-shadow: 0 3px 12px rgba(19, 194, 194, 0.3);
            }

            &.vehicle {
              border-color: rgba(167, 139, 250, 0.7);
              background: linear-gradient(
                135deg,
                rgba(0, 20, 40, 0.9),
                rgba(167, 139, 250, 0.3)
              );
              box-shadow: 0 3px 12px rgba(167, 139, 250, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>
