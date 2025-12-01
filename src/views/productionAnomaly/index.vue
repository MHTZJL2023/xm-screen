<template>
  <BasePageView>
    <!-- <BaseCard :title="cjyhpcl" class="cjyhpcl">
      <div class="search">
        <a-input class="my-input" v-model:value="code" placeholder="输入车辆编号"></a-input>
        <a-button class="my-button-custom" @click="getCjyhpcl()">查询</a-button>
      </div>
      <div class="list">
        <div class="listItem" v-for="item in list" :key="item">
          <div>
            <span>车辆编号：{{ item.clch || '-' }}</span>
            <span style="margin-left: 20px;">工位：{{ item.gwmc || '-' }}</span>
            <div>进场时间：{{ item.jxsj || '-' }}</div>
          </div>
          <a-button class="my-button-custom" style="margin-left: auto;">监控</a-button>
        </div>
      </div>
    </BaseCard> -->
    <BaseCard :title="cxryctcb" style="position: absolute; bottom: 20px">
      <Charts :options="options2" style="height: 260px"></Charts>
    </BaseCard>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';
import Charts from '@/components/Charts/Charts.vue';

import { onMounted, ref } from 'vue';
import cxryctcb from '@/assets/images/cardTitle/cxryctcb.png';
import { getCarInfo } from '@/service/mes';
import {
  getHiddenDangerAbarbeitungRate,
  getProductionWarnCarsRate,
} from '@/service/saveeyes';

import { Options1, Options2 } from './options';

const options1 = ref({ ...Options1 });
const options2 = ref({ ...Options2 });
const code = ref('');
const list = ref([]);
const getCjyhpcl = async () => {
  try {
    const res = await getCarInfo({ scxid: '310' });
    // const res = [
    //   {
    //     aufnr: "R5A002380238",
    //     clch: "R5U00679",
    //     cllbmc: "大巴",
    //     epProcess: "Y",
    //     gwmc: "修整工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:02:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:02:00"
    //   },
    //   {
    //     aufnr: "R5A002370237",
    //     clch: "R5A00237",
    //     cllbmc: "中巴",
    //     epProcess: "Y",
    //     gwmc: "缓冲工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:01:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:01:00"
    //   },
    //   {
    //     aufnr: "R5A002380238",
    //     clch: "R5U00679",
    //     cllbmc: "大巴",
    //     epProcess: "Y",
    //     gwmc: "修整工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:02:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:02:00"
    //   },
    //   {
    //     aufnr: "R5A002370237",
    //     clch: "R5A00237",
    //     cllbmc: "中巴",
    //     epProcess: "Y",
    //     gwmc: "缓冲工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:01:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:01:00"
    //   },
    //   {
    //     aufnr: "R5A002380238",
    //     clch: "R5U00679",
    //     cllbmc: "大巴",
    //     epProcess: "Y",
    //     gwmc: "修整工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:02:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:02:00"
    //   },
    //   {
    //     aufnr: "R5A002370237",
    //     clch: "R5A00237",
    //     cllbmc: "中巴",
    //     epProcess: "Y",
    //     gwmc: "缓冲工位",
    //     htbh: "SA24080014",
    //     jxsj: "2024-12-19 09:01:00",
    //     remark: "在制车",
    //     scxmc: "总装商用车专线生产线",
    //     ztbgsj: "2024-12-19 09:01:00"
    //   },
    // ]
    list.value = res;
  } catch (err) {
    console.log(err);
  }
};

const getCjyhzgl = async () => {
  try {
    const res = await getProductionWarnCarsRate({ cxname: '总装A线生产线' });

    // const res = [
    //   { lzsj: '2025-02-28', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-01', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-02', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-03', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-04', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-05', rate: 1.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-06', rate: 0.0, scxmc: '总装商用车专线生产线' },
    // ];
    const x = res.map(item => [item.lzsj, item.rate]);
    options2.value.xAxis.data = x.map(item => item[0]);
    options2.value.series[0].data = x.map(item => item[1]);
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
  margin-top: 0px;
  margin-bottom: 60px;
  height: 500px;
  margin-left: auto;
}

.search {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.list {
  height: calc(460px - 63px);
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
  background-color: rgba(75, 162, 132, 0.1); // 偶数行浅色背景
  margin: 5px 0;
}

.detail {
  cursor: pointer;
}
</style>
