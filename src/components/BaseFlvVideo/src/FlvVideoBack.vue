<template>
  <div ref="parentContainer" class="base-hk-video">
    <div class="videoContainer">
      <div v-show="loading" class="loading help">
        <LoadingOutlined class="icon" />
        <span>数据加载中</span>
      </div>
      <div v-show="isEmpty" class="empty">
        <!-- <div class="img"></div> -->
        <span>取流失败</span>
      </div>
      <video ref="videoElement" controls autoplay muted class="video"></video>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { nextTick, ref, watch } from "vue";

import { useFlvVideo } from "../hooks/useFlvVideo";

interface PropsType {
  params: {
    url: string;
    beginTime: string;
    endTime: string;
  };
}
const props = defineProps<PropsType>();

const isEmpty = ref(true);

const { createVideo, loading, videoElement } = useFlvVideo();

watch(
  () => props.params,
  async () => {
    if (props.params.url) {
      isEmpty.value = false;
      nextTick();
      createVideo(
        `${props.params.url}/?starttime=${dayjs(props.params.beginTime).format(
          "YYYYMMDDTHHmmss"
        )}Z&endtime=${dayjs(props.params.endTime).format("YYYYMMDDTHHmmss")}Z`
      );
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
<style lang="less" scoped>
.base-hk-video {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--color-neutral-1) !important;
  border: 1px solid var(--color-border);
  box-sizing: border-box;

  .header {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1003;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100% - 20px);
    margin-bottom: 10px;
  }

  .videoContainer {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    // padding: 2px;
    overflow: hidden;

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .img {
        // background-image: url("@/assets/images/video/img_no_picture.svg");
        background-size: 100% 100%;
        width: 38%;
        height: 46%;
      }
    }

    .help {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: #c9cdd4;
      background-color: var(--color-neutral-1);

      .icon {
        font-size: 60px;
      }

      span {
        margin-top: 10px;
        font-size: 14px;
      }
    }

    .video {
      width: 100%;
      height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
    }
  }
}

.sub-wnd {
  color: var(--color-neutral-4) !important;
  background-color: var(--color-neutral-1) !important;
  border: unset !important;
}

:deep(.ant-radio-button-checked) {
  color: #cdecfa;
}

:deep(.ant-radio-button-wrapper) {
  border: none;
  background: #004255;
  color: rgba(205, 236, 250, 1);
}
</style>
