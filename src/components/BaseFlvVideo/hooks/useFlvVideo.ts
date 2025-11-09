import { message } from "ant-design-vue";
import flvjs from "flv.js";
import { onUnmounted, ref } from "vue";

export function useFlvVideo() {
  const videoElement = ref<HTMLElement>();
  const loading = ref(false);

  // 首先定义flvPlayer为null
  const flvPlayer = ref<any>(null);
  const createVideo = (url: string | undefined) => {
    console.log(url);
    loading.value = true;
    if (flvjs.isSupported()) {
      flvPlayer.value = flvjs.createPlayer({
        type: "flv",
        url,
        isLive: true,
        hasAudio: false,
      });

      flvPlayer.value.attachMediaElement(videoElement.value);
      flvPlayer.value.load();
      setTimeout(() => {
        flvPlayer.value.play();
      }, 300);

      // 处理视频播放错误的语法
      flvPlayer.value.on("error", () => {
        message.error("加载视频失败");
        return false;
      });
    }
    loading.value = false;
  };

  onUnmounted(() => {
    if (flvPlayer.value) flvPlayer.value.destroy(); // 销毁播放实例
  });

  return {
    createVideo,
    videoElement,
    loading,
  };

  // const destroy = () => {
  //   flvPlayer.value.pause() // 暂停播放数据流
  //   flvPlayer.value.unload() // 取消数据流加载
  //   flvPlayer.value.detachMediaElement() // 将播放实例从节点中取出
  //   flvPlayer.value.destroy() // 销毁播放实例
  //   flvPlayer.value = null
  // }
}
