<template>
  <div
    class="ptcj"
    :class="{ 'fullscreen-active': isFullscreen }"
    ref="fullscreenRef">
    <div class="controls">
      <a-button size="small" @click="toggleFullscreen" class="fullscreen-btn">
        <ExpandOutlined v-if="!isFullscreen" />
        <CompressOutlined v-else />
      </a-button>
    </div>
    <iframe
      :src="iframeSrc"
      :width="iframeWidth"
      :height="iframeHeight"
      frameborder="0"
      :style="{
        height: isFullscreen ? '100vh' : '600px',
        width: isFullscreen ? '100%' : '780px',
      }"></iframe>
  </div>
</template>

<script setup lang="ts">
import { CompressOutlined, ExpandOutlined } from '@ant-design/icons-vue';
import { useFullscreen } from '@vueuse/core';
import { computed, ref } from 'vue';

const fullscreenRef = ref<HTMLElement | null>(null);
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(
  fullscreenRef,
  {
    requestFullscreenOptions: {
      navigationUI: 'hide',
    },
  },
);

// 计算属性根据是否全屏来设置iframe尺寸
const iframeSrc = ref('http://192.168.1.9:8000/#/?token=jGwv0xDzYaSVX0cV5EZ0');
const iframeWidth = computed(() => (isFullscreen.value ? '100vw' : '780px'));
const iframeHeight = computed(() => (isFullscreen.value ? '100vh' : '500px'));
</script>

<style lang="less" scoped>
.ptcj {
  position: absolute;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  overflow: hidden; // 添加此属性避免内容溢出

  // 全屏状态下的样式
  &.fullscreen-active {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  iframe {
    width: 780px;
    height: 500px;
    transition: all 0.3s ease;
    border: none;

    // 全屏状态下让iframe占满整个屏幕
    .fullscreen-active & {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .controls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    .fullscreen-btn {
      background: rgba(152, 152, 152, 0.8);
      border: 1px solid #d9d9d900;

      &:hover {
        background: rgba(152, 152, 152, 0.9);
      }
    }
  }
}

// 全屏时隐藏滚动条
.fullscreen-active {
  overflow: hidden;
}
</style>
