<template>
  <BasePageView>
    <BaseCard :title="cjyhpcl" class="cjyhpcl">
      <template #extra>
        <img class="detail" src="@/assets/images/cardTitle/ckxq.png" />
      </template>
      <Charts :options="options1" height="240px" style="width: 100%;"></Charts>
    </BaseCard>
    <BaseCard :title="cjyhzgl">
      <Charts :options="options2" height="240px" style="width: 100%;"></Charts>
    </BaseCard>
  </BasePageView>
  <JcymModal :visible="jcymVisible" @colse="jcymVisible = false" />
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import Charts from "@/components/Charts/Charts.vue";
import JcymModal from '@/components/JcymModal.vue'

import { onMounted, ref } from "vue";
import cjyhpcl from "@/assets/images/cardTitle/cjyhpcl.png";
import cjyhzgl from "@/assets/images/cardTitle/cjyhzgl.png";
import { getHiddenDangerAbarbeitungRate, getHiddenDangerInvestigationRate } from "@/service/saveeyes";

import { Options1, Options2 } from './options'


const jcymVisible = ref(false);
const options1 = ref({ ...Options1 });
const options2 = ref({ ...Options2 });

const getCjyhpcl = async () => {
  try {
    const res = await getHiddenDangerInvestigationRate();
    // const data = [{
    //   compname: "厦门金龙礼宾车有限公司",
    //   orgname: "厦门金龙礼宾车有限公司",
    //   rate: 0.75
    // }]
    const x = res.map(item => item.orgname);
    const y = res.map(item => item.rate);

    options1.value.series[0].data = y;
    options1.value.xAxis.data = x;

    console.log('options1', options1.value);
  } catch (err) {
    console.log(err)
  }
};

const getCjyhzgl = async () => {
  try {
    const res = await getHiddenDangerAbarbeitungRate();
    // const data = [
    //   {
    //     compname: "厦门金龙礼宾车有限公司",
    //     orgname: "厦门金龙礼宾车有限公司",
    //     rate: 0.3
    //   }
    // ]
    const x = res.map(item => item.orgname);
    const y = res.map(item => item.rate);
    options2.value.series[0].data = y;
    options2.value.xAxis.data = x;
    console.log('options2', options2.value);
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getCjyhpcl();
  getCjyhzgl();
});
</script>
<style lang="less" scoped>
.cjyhpcl {
  margin-top: 224px;
  margin-bottom: 60px;
}

.detail {
  cursor: pointer;
}
</style>
