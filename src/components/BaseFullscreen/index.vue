<template>
  <a-space class="screen-container" align="center" :gap="5">
    <img :src="isFullscreen ? iconScreen : iconFullScreen" @click="handleClick" />
    <div>全屏</div>
  </a-space>
</template>

<script lang="ts" setup>

// import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue'
// import autofit from 'autofit.js'
import iconScreen from '@/assets/images/icon_screen.png'
import iconFullScreen from '@/assets/images/icon_full_screen.png'
import { useFullscreen } from '@/hooks'

interface PropsType {
  fullscreenRef?: any,
}
const props = defineProps<PropsType>()
const emits = defineEmits(['update:fullscreen'])
const { isFullscreen, toggle } = useFullscreen()
const handleClick = () => {
  emits('update:fullscreen', isFullscreen.value)
  toggle(props.fullscreenRef || document.body)
}
</script>

<style scoped lang="less">
.screen-container {
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  font-weight: 400;
  font-size: 16px;
  color: #D8ECFF;
  line-height: 12px;
  opacity: 0.6;

}
</style>
