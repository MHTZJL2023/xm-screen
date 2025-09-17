<template>
  <BasePageView>
    <div style="display: flex;">
      <!-- <Ssjk /> -->
      <!-- <Ktwjc @onDetailsOpen="detailsOpen = true" />
      <Ystajc @onDetailsOpen="detailsOpen = true" /> -->
      <Ryxx />
      <Yzhtbdw />
      <Sfgwgj />
      <Sbzt />
      <Ssjk />
      <!-- <BaseCard :title="qxlyfx" class="card">
        <BaseHighCharts ref="charts" :options="options1" style="height: 240px;"></BaseHighCharts>
      </BaseCard>
      <BaseLongCard :title1="cxrdpu" :title2="cxqx" :title3="cxgpwtgdbb" class="card_long">
        <template #part1>
          <Charts :options="options2" height="240px" style="width: 100%;"></Charts>
        </template>
<template #part2>
          <a-table class="my-table" size="small" :columns="columns" :data-source="data" :pagination="false"
            :scroll="{ y: '210px' }" style="height: 240px;"></a-table>
        </template>
<template #part3>
          <div class="problemList">
            <div class="title">问题点</div>
            <div class="list">
              <div class="listItem" v-for="item in problemList" :key="item">{{ item }}</div>
            </div>
          </div>
        </template>
</BaseLongCard> -->
    </div>
  </BasePageView>
  <JcxqModal :visible="detailsOpen" @colse="detailsOpen = false" />
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseHighCharts from "@/components/BaseHighCharts/index.vue";
import BaseLongCard from '@/components/BaseLongCard/index.vue'
import Charts from "@/components/Charts/Charts.vue";
import JcxqModal from "@/components/JcxqModal.vue";
import Ktwjc from "@/components/Ktwjc.vue";
import Ryxx from "@/components/Ryxx.vue";
import Sbzt from "@/components/Sbzt.vue";
import Sfgwgj from "@/components/Sfgwgj.vue";
import Ssjk from "@/components/Ssjk.vue";
import Ystajc from "@/components/Ystajc.vue";
import Yzhtbdw from "@/components/Yzhtbdw.vue";
import Zjcl from "@/components/zjcl/index.vue";

import { nextTick, onMounted, ref } from 'vue'
import cxgpwtgdbb from '@/assets/images/cardTitle/cxgpwtgdbb.png'
import cxqx from '@/assets/images/cardTitle/cxqx.png'
import cxrdpu from '@/assets/images/cardTitle/cxrdpu.png'
import qxlyfx from '@/assets/images/cardTitle/qxlyfx.png'
import { getCxDpuForWeek, getDefectCount, getProductionWorkInProcessWarnRecord } from "@/service/qms";

import { Options1, Options2 } from "./options";

const options1 = ref(Options1);
const options2 = ref(Options2);

const detailsOpen = ref(false)
const charts = ref(null)
const data = ref([])
const problemList = ref([])
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
    width: 80
  },
  {
    title: '类型',
    dataIndex: 'abnormalType',
    key: 'abnormalType',
    align: 'center',
  },
  {
    title: '问题',
    dataIndex: 'fdProblemDesc',
    key: 'fdProblemDesc',
    align: 'center',
  },
]

const getData1 = async () => {
  try {
    // const res = await getCxDpuForWeek({cxname:''});
    const res = [
      {
        checkdate: "2025-01-03",
        defectCount: 1,
        mesname: "焊装A线骨架拼装区（后段）"
      },
      {
        checkdate: "2025-01-03",
        defectCount: 1,
        mesname: "涂装A线生产线后段"
      }
    ]
    options1.value.series[0].data = res.map(item => [item.mesname, item.defectCount]);
  } catch (error) {
    console.log(error);
  }
};
const getData2 = async () => {
  try {
    // const res = await getCxDpuForWeek({name:''});
    const res = [
      {
        defectCount: 1,
        passCount: 1,
        processDpu: 1,
        thedate: "2024-12-30"
      }
    ]
    const x = res.map(item => item.thedate)
    options2.value.xAxis.data = x
    options2.value.series[0].data = res.map(item => item.processDpu)
  } catch (err) {
    console.log(err)
  }
}

const getData3 = async () => {
  try {
    // const res = await getProductionWorkInProcessWarnRecord({cxname:''})
    const res = [{ abnormalType: "物料短缺问题", clch: "R5U00679", docCreateTime: "2025-03-06", docStatus: "待审", docSubject: "厦门  前档玻璃  问题", fdEmergencyLevel: "紧急", fdFactory: "6100", fdLastModifiedTime: "2024-12-25 14:32:00", fdNumber: "HZ202412250009", fdProblemDesc: "前档玻璃 缺料，请落实具体到货时间", fdTechRequire: "前档玻璃  问题", gwmc: "修整工位", jxsj: "2025-03-06", scxmc: "总装商用车专线生产线", submitDepart: "总装公交产线", ztbgsj: "2025-03-06 09:02:00" },]
    data.value = res.map((item, index) => {
      return {
        ...item,
        index: index + 1
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const getData4 = async () => {
  try {
    // const res = await getCxProblemFrequencyForYesterday({ cxname: '352'})
    const res = [
      {
        checkdate: "2025-01-02",
        firstdefectname: "焊装综合（焊装）",
        mesname: "焊装A线骨架拼装区(前段)",
        problemCount: 1,
        seconddefectname: "XHZZH270"
      },
      {
        checkdate: "2025-01-02",
        firstdefectname: "封板质量（焊装）",
        mesname: "焊装B线骨架拼装区（前段）",
        problemCount: 1,
        seconddefectname: "XHZFB080"
      },
      {
        checkdate: "2025-01-02",
        firstdefectname: "玻璃钢缺陷",
        mesname: "涂装A线生产线后段",
        problemCount: 1,
        seconddefectname: "TZBLG0070"
      }
    ]
    problemList.value = res.map((item) => item.mesname)
  }
  catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  nextTick(() => {
    getData1()
  })
  getData2()
  getData3()
  getData4()
});
</script>
<style lang="less" scoped>
.card {
  margin-top: 580px;
  margin-left: 620px;
}

.card_long {
  margin-top: -50px;
  margin-left: auto; // 修改此处，使元素自动靠右
}

.problemList {
  width: 100%;
  height: 240px;

  .title {
    display: flex;
    align-items: center;
    padding: 0 18px;
    height: 43px;
    background: url(@/assets/images/main/list_title.png);
    background-size: 100% 100%;
    color: #4ba284;
    font-size: 20px;
    margin-top: 20px;
  }

  .list {
    height: calc(240px - 63px);
    overflow-y: scroll;
  }

  .listItem {
    display: flex;
    align-items: center;
    height: 38px;
    padding: 2px 20px;
    line-height: 38px;
    font-size: 16px;
  }

  // 添加斑马纹效果
  .listItem:nth-child(even) {
    background-color: rgba(75, 162, 132, 0.1); // 偶数行浅色背景
  }

  .listItem:nth-child(odd) {
    background-color: transparent; // 奇数行透明背景
  }
}
</style>
