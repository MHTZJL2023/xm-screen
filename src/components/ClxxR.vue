<template>
  <BaseCard title="示范工位告警" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <div>
          <div>
            <span>姓名：{{ item.code }}</span>
            <span style="margin-left: 20px;">离开时间：{{ item.content }}</span>
          </div>
          <div>
            <span>告警时间：{{ item.code }}</span>
            <span style="margin-left: 20px;">关联车辆：{{ item.content }}</span>
          </div>
        </div>
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
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: 820px;
  top: -420px;
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
