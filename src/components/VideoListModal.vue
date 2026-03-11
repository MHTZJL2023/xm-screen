<template>
  <a-modal
    class="my-modal"
    title="视频监控"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('close')"
    width="1000px"
    centered>
    <div class="content">
      <video
        ref="videoRef"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        preload="auto"
        width="960"
        height="540"></video>
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

const emits = defineEmits<{
  close: [];
}>();

const videoRef = ref<HTMLVideoElement | null>(null);
let player: any = null;
let flvPlayer: any = null;

/* 初始化播放器 */
const initPlayer = () => {
  if (!videoRef.value) return;

  // 使用 flv.js 播放 HTTP-FLV 流
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
  height: 450px;
  background-color: #000;

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
</style>
