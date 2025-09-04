<template>
  <div class="pageView">
    <div class="tool">
      <div class="sideControl" @click="toggleVisible"></div>
      <div class="sel">
        <img src="@/assets/images/main/gongweitubiao.png" alt="">
      </div>
      <div class="sel">
        <img src="@/assets/images/main/chejiantubiao.png" alt="">
      </div>
    </div>
    <div class="content" v-show="isVisible">
      <slot></slot>
    </div>
    <div class="footer" v-show="isVisible">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";


// 定义响应式变量控制显示/隐藏
const isVisible = ref(true);

// 切换显示/隐藏状态的方法
const toggleVisible = () => {
  console.log('11', 'toggleVisible')
  isVisible.value = !isVisible.value;
};
</script>

<style scoped lang="less">
.pageView {
  margin: 80px 20px 20px 20px;

  .tool {
    display: flex;
    gap: 50px;
    align-items: center;

    .sideControl {
      cursor: pointer;
      width: 37px;
      height: 27px;
      background: url(@/assets/images/main/cemianshouhuianniu.png);
    }

    .sel {
      cursor: pointer;
      width: 154px;
      height: 53px;
      background: url(@/assets/images/main/xuanzhonggongweibeijing.png);
      display: flex;
      align-items: center;

      img {
        margin: 0 10px
      }
    }
  }

  .content {
    margin: 20px 34px;
    pointer-events: painted;
  }

  .footer {
    display: flex;
    margin-top: 600px;
    margin-left: 90px;
    pointer-events: painted;
  }
}
</style>
