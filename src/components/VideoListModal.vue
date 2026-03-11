<template>
  <a-modal
    class="my-modal"
    :title="data.label || '视频监控'"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('close')"
    width="1000px"
    centered>
    <div class="content">
      <div class="video-wrapper">
        <video
          ref="videoRef"
          class="video-js vjs-default-skin vjs-big-play-centered"
          controls
          preload="auto"
          width="990"></video>
        <!-- 全屏按钮 -->
        <button class="fullscreen-btn" @click="toggleFullscreen">
          <span v-if="!isFullscreen">⛶</span>
          <span v-else>❐</span>
        </button>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import flvjs from 'flv.js';
import { onUnmounted, ref, watch } from 'vue';

const props = defineProps<{
  visible: boolean;
  data: any;
}>();

const emits = defineEmits(['close']);

const videoRef = ref<HTMLVideoElement | null>(null);
const isFullscreen = ref(false);
let player: any = null;
let flvPlayer: any = null;

/* 切换全屏 */
const toggleFullscreen = () => {
  if (!videoRef.value) return;

  if (!isFullscreen.value) {
    // 进入全屏
    if (videoRef.value.requestFullscreen) {
      videoRef.value.requestFullscreen();
    } else if ((videoRef.value as any).webkitRequestFullscreen) {
      (videoRef.value as any).webkitRequestFullscreen();
    } else if ((videoRef.value as any).msRequestFullscreen) {
      (videoRef.value as any).msRequestFullscreen();
    }
  } else {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
  }
};

/* 监听全屏状态变化 */
const setupFullscreenListener = () => {
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = document.fullscreenElement === videoRef.value;
  });
  document.addEventListener('webkitfullscreenchange', () => {
    isFullscreen.value =
      (document as any).webkitFullscreenElement === videoRef.value;
  });
};

/* 初始化播放器 */
const initPlayer = () => {
  if (!videoRef.value) return;
  setupFullscreenListener();

  if (flvjs.isSupported()) {
    flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: props.data.url + '?token=' + localStorage.getItem('access_token'),
      isLive: true,
      hasVideo: true,
      hasAudio: false,
    });
    flvPlayer.attachMediaElement(videoRef.value);
    flvPlayer.load();
    flvPlayer.play();
  } else {
    console.error('flv.js 不支持当前浏览器');
  }
};

/* 销毁播放器 */
const destroyPlayer = () => {
  // 退出全屏
  if (isFullscreen.value && document.exitFullscreen) {
    document.exitFullscreen();
  }

  if (flvPlayer) {
    flvPlayer.pause();
    flvPlayer.unload();
    flvPlayer.detachMediaElement();
    flvPlayer.destroy();
    flvPlayer = null;
  }
  if (player) {
    player.dispose();
    player = null;
  }
};

/* 监听模态框显示 */
watch(
  () => props.visible,
  val => {
    if (val) {
      setTimeout(() => {
        initPlayer();
      }, 100);
    } else {
      destroyPlayer();
    }
  },
);

onUnmounted(() => {
  destroyPlayer();
});
</script>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  overflow-y: scroll;
  height: 100%;
  background-color: #000;

  .video-wrapper {
    position: relative;

    .fullscreen-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.6);
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }

  :deep(.video-js) {
    width: 960px;
    height: 540px;
  }

  :deep(.vjs-big-play-button) {
    background-color: rgba(0, 150, 136, 0.7);
    border: none;
    border-radius: 50%;
  }
}

/* 全屏样式 */
:deep(.video-js:fullscreen) {
  width: 100vw !important;
  height: 100vh !important;
}
</style>
