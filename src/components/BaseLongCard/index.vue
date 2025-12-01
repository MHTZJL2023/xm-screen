<template>
  <div class="card">
    <div class="part">
      <div class="title">
        <div class="title_text">{{ title1 }}</div>
        <!-- <img class="title_img" :src="title1" /> -->

        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
      <slot name="part1"></slot>
    </div>

    <div class="part" style="margin-bottom: 30px">
      <div class="title">
        <img class="title_img" :src="title2" />
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
      <slot name="part2"></slot>
    </div>

    <div class="part">
      <div class="title">
        <img class="title_img" :src="title3" />
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
      <slot name="part3"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface CardProps {
  title1: string;
  title2: string;
  title3: string;
  type: number;
}
const props = defineProps<CardProps>();
</script>
<style lang="less" scoped>
.card {
  width: 460px;
  height: 937px;
  background: url(@/assets/images/main/card_long.png);
  background-size: 100% 100%;
  padding: 10px 15px;

  .title {
    // width: 226px;
    height: 44px;
    background: url(@/assets/images/main/xiaobiaotibeijing.png);
    background-size: 226px 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;

    .extra {
      display: flex;
      margin-left: 120px;
    }
    .title_text {
      // width: 800px;
      margin-left: 50px;
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      line-height: 44px;
      text-shadow: 10px 10px 5px #6ba97580;
    }
    .title_img {
      margin-left: 50px;
    }
  }

  .part {
    margin-bottom: 10px;
  }
}
</style>
