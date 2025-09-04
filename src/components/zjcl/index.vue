<template>
  <BaseCard title="在检车辆" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <span>{{ item.gw }}</span>
        <span style="margin-left: 40px;">检测内容：{{ item.content }}</span>
        <span style="margin-left: auto;">车辆编号：{{ item.code }}</span>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

import { onMounted, ref } from "vue";



const list = ref([
  {
    gw: "工位1",
    content: "轴承",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "轴承",
    code: "AAA233"
  },
])

const getData = async () => {
  const res = await getCjyhpcl();
  list.value = res.data;
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: -600px;
  top: -420px;
  width: 450px;
  height: 500px;
}


.list {
  height: calc(500px - 63px);
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
