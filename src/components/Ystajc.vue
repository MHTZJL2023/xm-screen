<template>
  <BaseCard title="颜色图案检测" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <span>车辆编号：{{ item.code }}</span>
        <span style="margin-left: 10px;">颜色：{{ item.ys }}</span>
        <span style="margin-left: 10px;">图案：{{ item.ta }}</span>
        <a-button class="my-button-custom" style="margin-left: auto;">详情</a-button>
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
    ys: "合格",
    ta: "合格"
  },
  {
    code: "AAA2",
    ys: "合格",
    ta: "合格"
  },
  {
    code: "AAA1",
    ys: "合格",
    ta: "合格"
  }
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


.list {
  height: calc(400px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  display: flex;
  align-items: center;
  height: auto;
  padding: 2px 20px;
  line-height: 38px;
  font-size: 16px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
}
</style>
