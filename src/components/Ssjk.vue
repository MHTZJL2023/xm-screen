<template>
  <BaseCard title="实时监控" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item.code"
        :style="{ color: selected == item.code ? '#59c18e' : '#fff' }" @click="selected = item.code">{{ item.content }}
      </div>
    </div>
    <div class="video"></div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

import { onMounted, ref } from "vue";

const selected = ref("");
const list = ref([
  {
    gw: "工位1",
    content: "监控1",
    code: "1"
  },
  {
    gw: "工位1",
    content: "监控2",
    code: "2"
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
  left: -600px;
  top: 155px;
  width: 420px;
  height: 300px;
}


.list {
  height: calc(400px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  width: 50px;
  text-align: center;
  height: auto;
  padding: 1px 20px;
  line-height: 24px;
  font-size: 16px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
  cursor: pointer;

  &:active {
    color: #59c18e;
  }
}
</style>
