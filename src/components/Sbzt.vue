<template>
  <BaseCard title="设备状态" :title-type="true" class="card">
    <div style="display: flex;margin-top: 15px;">
      <div class="tabs">
        <div class="title">定位基站状态</div>
        <div class="tab" style="margin-bottom: 10px;">
          <div class="item">在线数量：{{ jzData.online }}</div>
          <div class="item">离线数量：{{ jzData.outline }}</div>
        </div>
        <div class="title">定位标签状态</div>
        <div class="tab">
          <div class="item">在线数量：{{ bqData.online }}</div>
          <div class="item">离线数量：{{ bqData.outline }}</div>
        </div>
      </div>
      <div class="list">
        <div class="title">标签电量告警</div>
        <div class="content">
          <div v-for="item in list" :key="item.code" class="item">{{ item.tag_id }}：电量不足请充电</div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

import { onMounted, ref } from "vue";
import { countDeviceStatusNum, getLowCardPowerInfo } from "@/service/person";


const jzData = ref({})
const bqData = ref({})

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
  const res = await countDeviceStatusNum();
  // const res = {
  //   code: 0,
  //   message: "成功",
  //   online: 2,
  //   outline: 3,
  // }
  jzData.value = res;
  bqData.value = res;

  const res1 = await getLowCardPowerInfo();
  // const res1 = [
  //   {
  //     power: 12,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 604292
  //   },
  //   {
  //     power: 14,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 603824
  //   },
  //   {
  //     power: 12,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 604292
  //   },
  //   {
  //     power: 14,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 603824
  //   },
  //   {
  //     power: 12,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 604292
  //   },
  //   {
  //     power: 12,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 604292
  //   },
  //   {
  //     power: 12,
  //     sn: "S02A312304",
  //     sw_version: "8.14.1.3",
  //     tag_id: 604292
  //   },
  // ]
  list.value = res1;
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: -600px;
  top: -150px;
  width: 420px;
  height: 275px;
}


.tabs {
  width: 40%;
  margin-right: 5%;
  text-align: center;

  .title {
    font-weight: bolder;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .tab {
    padding: 5px 5px;
    background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
    text-align: center;
    border-radius: 10px;
  }
}

.list {
  width: 55%;
  text-align: center;
  display: block;

  .title {
    font-weight: bolder;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .content {
    padding: 10px 10px;
    background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
    height: 150px;
    overflow-y: scroll;
    border-radius: 10px;
  }
}

.item {
  line-height: 30px;
}
</style>
