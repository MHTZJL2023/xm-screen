<template>
  <div class="card">
    <div class="title">
      <img v-if="!titleType" class="title_img" :src="title" />
      <div v-else class="title_text">{{ title }}</div>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

interface CardProps {
  title: string,
  titleType: boolean
}
const props = defineProps<CardProps>()
</script>
<style lang="less" scoped>
.card {
  width: 460px;
  height: 304px;
  background: url(@/assets/images/main/xiaowaikuang.png);
  background-size: 100% 100%;
  padding: 10px 15px;

  .title {
    width: 226px;
    height: 44px;
    background: url(@/assets/images/main/xiaobiaotibeijing.png);
    background-size: 100% 100%;
    // display: flex;
    align-items: center;

    .extra {
      display: flex;
      margin-left: 120px;
    }

    .title_img {
      margin-left: 50px;
    }

    .title_text {
      width: 100%;
      margin-left: 50px;
      font-size: 18px;
      color: #fff;
      font-weight: bold;
      line-height: 44px;
    }
  }
}
</style>
