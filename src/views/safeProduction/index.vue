<template>
  <BasePageView>
    <BaseCard :title="cjyhpcl" class="cjyhpcl">
      <!-- <template #extra>
        <img class="detail" src="@/assets/images/cardTitle/ckxq.png" />
      </template> -->
      <BaseHighCharts
        id="cjyhpcl"
        :options="options1"
        style="width: 100%; height: 240px"></BaseHighCharts>
    </BaseCard>
    <BaseCard :title="cjyhzgl">
      <BaseHighCharts
        id="cjyhzgl"
        :options="options2"
        style="width: 100%; height: 240px"></BaseHighCharts>
    </BaseCard>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';
import BaseHighCharts from '@/components/BaseHighCharts/index.vue';

import { onMounted, ref } from 'vue';
import cjyhpcl from '@/assets/images/cardTitle/cjyhpcl.png';
import cjyhzgl from '@/assets/images/cardTitle/cjyhzgl.png';
import {
  getHiddenDangerAbarbeitungRate,
  getHiddenDangerInvestigationRate,
} from '@/service/saveeyes';

import { OptionsPie, OptionsPie1 } from './options';

const options1 = ref({ ...OptionsPie });
const options2 = ref({ ...OptionsPie1 });

const getCjyhpcl = async () => {
  try {
    const res = await getHiddenDangerInvestigationRate();

    // const res = [
    //   {
    //     compname: '厦门金龙礼宾车有限公司',
    //     orgname: '厦门金龙礼宾车有限公司',
    //     rate: 0.75,
    //   },
    // ];

    const val = res[0].rate;
    options1.value.series[0].data = [
      ['未排查率', 1 - val],
      ['排查率', val],
    ];
    console.log('options1', options1.value);
  } catch (err) {
    console.log(err);
  }
};

const getCjyhzgl = async () => {
  try {
    const res = await getHiddenDangerAbarbeitungRate();

    // const res = [
    //   {
    //     compname: '厦门金龙礼宾车有限公司',
    //     orgname: '厦门金龙礼宾车有限公司',
    //     rate: 0.3,
    //   },
    // ];

    const val = res[0].rate;

    options2.value.series[0].data = [
      ['未整改率', 1 - val],
      ['整改率', val],
    ];
  } catch (err) {
    console.log(err);
  }
};

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
