<template>
  <BaseCard title="原子灰涂补点位统计" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <span>{{ item.gw }}</span>
        <span style="margin-left: 30px;">车辆编号：{{ item.code }}</span>
        <span style="margin-left: 30px;">涂补点位数量：{{ item.content }}</span>
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
    gw: "工位1",
    content: "1",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "2",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "3",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "4",
    code: "AAA233"
  },
])

const getData = async () => {
  try {
    const res = await getCjyhpcl();
    list.value = res;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: 720px;
  top: 20px;
  width: 520px;
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
