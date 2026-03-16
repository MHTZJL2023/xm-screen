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
        <div ref="videoRef" id="ws-real-player" class="video-js"></div>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';
import PlayerManager from '@/assets/icc/PlayerManager.js';
import { startVideo } from '@/service/video';

const props = defineProps<{
  visible: boolean;
  data: any;
}>();

const emits = defineEmits(['close']);

const videoRef = ref<HTMLVideoElement | null>(null);
const isFullscreen = ref(false);

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
const getUrl = async () => {
  const res = await startVideo({
    dataType: '3',
    streamType: '1',
    channelId: props.data.channelId,
    urlType: 1,
    packtype: 'Private',
    clientSupportWSSDirect: 1,
    enableXNetFlag: 1,
    optModule: 'ADMIN_001031',
  });

  return res;
};

const realPlay = async () => {
  console.log('获取url...');
  const video = await getUrl();
  console.log('视频连接...');
  videoRef.value.realByUrl({
    wsURL: video.wsUrl, // WebSocket 连接地址
    rtspURL: video.url,
    channelId: props.data.channelId,
    streamType: 1, // 1-主码流 2-辅码流1 3-辅码流2
    selectIndex: 0, // 窗口索引（从0开始）
    channelData: {
      id: props.data.channelId,
    },
  });
};

/* 初始化播放器 */
const initPlayer = () => {
  if (!videoRef.value) return;
  setupFullscreenListener();
  console.log('初始化播放器...');
  videoRef.value = new PlayerManager({
    el: 'ws-real-player', // 实时预览容器 id
    type: 'real', // real-实时预览 record-录像回放
    maxNum: 4, // 播放器上限路数（支持 1/4/9/16/25）
    num: 1, // 初始化显示路数
    showControl: true, // 是否显示底部工具栏
    showIcons: {
      // 顶部窗口自定义按钮
      streamChangeSelect: true, // 主辅码流切换
      replayIcon: true, // 刷新重播按钮
      ivsIcon: true, // 智能帧按钮
      talkIcon: true, // 对讲功能按钮
      localRecordIcon: true, // 本地录像按钮
      audioIcon: true, // 声音控制按钮
      snapshotIcon: true, // 抓图按钮
      closeIcon: true, // 关闭视频按钮
    },
    openIvs: true, // 是否开启智能帧/规则线/目标框
    ivsTypeArr: [1, 2], // 智能信息类型（1-规则线 2-目标框）
    showRecordProgressBar: true, // 录像回放时是否显示进度条
    useH265MSE: true, // 解码方式（true-硬解 false-软解）
    picCapCb: true, // 抓图回调（true-回调触发 false-直接下载）
  });

  realPlay();
};

/* 销毁播放器 */
const destroyPlayer = () => {
  // 退出全屏
  if (isFullscreen.value && document.exitFullscreen) {
    document.exitFullscreen();
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

  .video-js {
    width: 960px;
    height: 540px;
  }
}
/* 全屏样式 */
.video-js:fullscreen {
  width: 100vw !important;
  height: 100vh !important;
}
</style>
