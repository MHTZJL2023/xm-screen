/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 18:01:07
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 18:02:54
 * @FilePath: /vite-project/src/hooks/useFullscreen.ts
 * @Description:
 */
import { ref } from 'vue';
import { api as fullscreen } from 'vue-fullscreen';
export const useFullscreen = () => {
  const isFullscreen = ref<boolean>(false);
  const isTeleport = ref<boolean>(true);

  /**
   * 状态切换
   * @param {any} target
   * @return {*}
   */
  const toggle = (target: any) => {
    if (isFullscreen.value) {
      target.style.zIndex = 1;
    } else {
      target.style.zIndex = 99;
    }
    fullscreen.toggle(target, {
      teleport: isTeleport.value,
      callback: value => {
        isFullscreen.value = value;
      },
    });
  };

  return {
    isFullscreen,
    isTeleport,
    toggle,
  };
};
