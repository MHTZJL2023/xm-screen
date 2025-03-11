<template>
  <a-space class="back-container" align="center" :gap="5">
    <img :src="backIcon" @click="handleClick" />
    <div>返回</div>
  </a-space>
</template>

<script lang="ts" setup>
import backIcon from '@/assets/images/icon_exit.png'
import router from '@/router'

const handleClick = () => {
  router.replace('/entrance')
}
</script>

<style scoped lang="less">
.back-container {
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  font-weight: 400;
  font-size: 16px;
  color: #d8ecff;
  line-height: 12px;
  opacity: 0.6;
}
</style>
