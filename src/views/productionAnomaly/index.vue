<template>
  <BasePageView>
    <BaseCard :title="cjyhpcl" class="cjyhpcl">
      <div class="search">
        <a-input class="my-input" v-model:value="code" placeholder="输入车辆编号"></a-input>
        <a-button class="my-button-custom" @click="getCjyhpcl()">查询</a-button>
      </div>
      <div class="list">
        <div class="listItem" v-for="item in list" :key="item">
          <div>
            <span>车辆编号：{{ item.clch }}</span>
            <span style="margin-left: 20px;">工位：{{ item.gwmc }}</span>
            <div>进场时间：{{ item.jxsj }}</div>
          </div>
          <a-button class="my-button-custom" style="margin-left: auto;">监控</a-button>
        </div>
      </div>
    </BaseCard>
    <BaseCard :title="cxryctcb" style="margin-left: auto;">
      <BaseHighCharts :options="options2" style="height: 240px;"></BaseHighCharts>
    </BaseCard>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseHighCharts from "@/components/BaseHighCharts/index.vue";
import Charts from "@/components/Charts/Charts.vue";

import { onMounted, ref } from "vue";
import cjyhpcl from "@/assets/images/cardTitle/cjyhpcl.png";
import cxryctcb from "@/assets/images/cardTitle/cxryctcb.png";
import { getHiddenDangerInvestigationRate, getProductionWorkInProcessWarnRecord } from "@/service/saveeyes";

import { Options1, Options2 } from './options'

const options1 = ref({ ...Options1 });
const options2 = ref({ ...Options2 });
const code = ref('')
const list = ref([])
const getCjyhpcl = async () => {
  try {
    // const res = await getProductionWorkInProcessWarnRecord({cxname:code.value});
    const res = [
      {
        aufnr: "R5A002380238",
        clch: "R5U00679",
        cllbmc: "大巴",
        epProcess: "Y",
        gwmc: "修整工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:02:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:02:00"
      },
      {
        aufnr: "R5A002370237",
        clch: "R5A00237",
        cllbmc: "中巴",
        epProcess: "Y",
        gwmc: "缓冲工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:01:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:01:00"
      },
      {
        aufnr: "R5A002380238",
        clch: "R5U00679",
        cllbmc: "大巴",
        epProcess: "Y",
        gwmc: "修整工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:02:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:02:00"
      },
      {
        aufnr: "R5A002370237",
        clch: "R5A00237",
        cllbmc: "中巴",
        epProcess: "Y",
        gwmc: "缓冲工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:01:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:01:00"
      },
      {
        aufnr: "R5A002380238",
        clch: "R5U00679",
        cllbmc: "大巴",
        epProcess: "Y",
        gwmc: "修整工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:02:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:02:00"
      },
      {
        aufnr: "R5A002370237",
        clch: "R5A00237",
        cllbmc: "中巴",
        epProcess: "Y",
        gwmc: "缓冲工位",
        htbh: "SA24080014",
        jxsj: "2024-12-19 09:01:00",
        remark: "在制车",
        scxmc: "总装商用车专线生产线",
        ztbgsj: "2024-12-19 09:01:00"
      },
    ]
    list.value = res;
  } catch (err) {
    console.log(err)
  }
};

const getCjyhzgl = async () => {
  try {
    // const res = await getHiddenDangerAbarbeitungRate();
    const data = [
      {
        compname: "厦门金龙礼宾车有限公司",
        orgname: "厦门金龙礼宾车有限公司",
        rate: 0.3
      }
    ]
    const x = data.map(item => item.orgname);
    const y = data.map(item => item.rate);
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
