<template>
  <BaseCard title="空调位检测" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <span>车辆编号：{{ item.code }}</span>
        <span style="margin-left: 40px;">空调安装：{{ item.content }}</span>
        <a-button class="my-button-custom" style="margin-left: auto;" @click="detailsOpen = true">详情</a-button>
      </div>
    </div>
  </BaseCard>

  <JcxqModal :visible="detailsOpen" @colse="detailsOpen = false" />
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import JcxqModal from "@/components/JcxqModal.vue";

import { onMounted, ref } from "vue";

const detailsOpen = ref(false);

const list = ref([
  {
    gw: "工位1",
    content: "合格",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA233"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA213"
  },
  {
    gw: "工位1",
    content: "合格",
    code: "AAA233"
  },
])

const getData = async () => {
  // const res = await getCjyhpcl();
  // list.value = res.data;
};
onMounted(() => {
  // // getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  right: 60px;
  top: 160px;
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
