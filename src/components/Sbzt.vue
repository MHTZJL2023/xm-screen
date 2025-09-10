<template>
  <BaseCard title="设备状态" :title-type="true" class="card">
    <div class="tabs">
      <div class="tab">
        <div class="title">定位基站</div>
        <div class="item">在线数量：125</div>
        <div class="item">离线数量：125</div>
      </div>
      <div class="tab">
        <div class="title">定位标签</div>
        <div class="item">在线数量：125</div>
        <div class="item">离线数量：125</div>
      </div>
    </div>
    <div class="list">
      <div class="title">标签点亮告警</div>
      <div class="content">
        <div v-for="item in list" :key="item.code" class="item">{{ item.name }}：{{ item.content }}</div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

import { onMounted, ref } from "vue";



const list = ref([
  {
    code: "AAA3",
    name: "标签",
    content: "xx电量不足"
  },
  {
    code: "AAA3",
    name: "标签",
    content: "xx电量不足"
  },
  {
    code: "AAA3",
    name: "标签",
    content: "xx电量不足"
  },
  {
    code: "AAA3",
    name: "标签",
    content: "xx电量不足"
  },
])

const getData = async () => {
  // const res = await getCjyhpcl();
  // list.value = res.data;
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: 820px;
  top: 20px;
  width: 420px;
  height: 400px;
}


.tabs {
  margin-top: 20px;
  display: flex;
  gap: 20px;

  .tab {
    width: 50%;
    padding: 10px 10px;
    background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
    text-align: center;

    .title {
      margin-bottom: 5px;
    }
  }
}

.list {
  margin-top: 20px;
  padding: 10px 10px;
  text-align: center;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景

  .title {
    margin-bottom: 5px;
  }

  .content {
    height: 150px;
  }
}

.item {
  line-height: 30px;
}
</style>
