<!--
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-01-10 10:23:05
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-09-24 18:05:19
 * @Description:
-->
<template>
  <div class="layout-main-container">
    <div class="header">
      <div class="title">水库运行管理矩阵平台</div>
      <div class="content">
        <DateView />
        <Menus style="flex: 1" />
        <div style="z-index: 999">
          <BaseFullscreen style="margin-right: 25px" />
          <BackView />
        </div>
      </div>
      <div class="bg"></div>
    </div>
    <a-drawer
      v-model:open="isOpen"
      :closable="false"
      :mask="false"
      :get-container="false"
      :style="{ position: 'absolute' }"
      width="450px"
      root-class-name="content-left-bg"
      placement="left"
    />
    <!-- <div class="map"></div> -->
    <RouterView></RouterView>
    <a-drawer
      v-model:open="isOpen"
      :closable="false"
      :mask="false"
      :get-container="false"
      :style="{ position: 'absolute' }"
      width="450px"
      root-class-name="content-right-bg"
      placement="right"
    />
  </div>
</template>
<script lang="ts" setup>
import BackView from './components/BackView.vue';
import DateView from './components/DateView.vue';
import Menus from './components/Menus.vue';

import { ref } from 'vue';

const isOpen = ref<boolean>(true);
</script>

<style scoped lang="less">
.layout-main-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  background-image: radial-gradient(
    circle at center,
    rgba(20, 20, 20, 0.614) 40%,
    rgb(0, 0, 0) 100%
  );

  .header {
    position: absolute;
    width: 100%;
    top: 0;
    pointer-events: painted;

    .title {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      font-weight: bold;
      font-size: 32px;
      line-height: 60px;
      color: #ffffff;
      // text-shadow: 0px 0px 6px rgba(12, 19, 33, 0.2);
      background: linear-gradient(0deg, #5ebaff 0%, #ffffff 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 3;
    }

    .content {
      position: relative;
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      box-sizing: border-box;
    }

    .bg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 200px;
      z-index: 2;
      pointer-events: none;
      background: url(@/assets/images/bg_top_title.png) no-repeat center / cover;
    }
  }
}
</style>
