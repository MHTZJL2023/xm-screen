<template>
  <BasePageView>
    <div style="display: flex;">
      <BaseMiddleCard :title1="qrjh" :title2="qrsj" class="card_middle">
        <template #part1>
          <Charts :options="options4" height="300px" style="width: 100%;"></Charts>
        </template>
        <template #part2>
          <Charts :options="options3" height="300px" style="width: 100%;"></Charts>
        </template>
      </BaseMiddleCard>
      <BaseLongCard :title1="cxrjhdcl" :title2="dclqs" :title3="cxdrjhdcl" class="card_long">
        <template #part1>
          <BaseHighCharts :options="options1" style="height: 240px;"></BaseHighCharts>
        </template>
        <template #part2>
          <Charts :options="options2" height="240px" style="width: 100%;"></Charts>
        </template>
        <template #part3>
          <BaseHighCharts :options="options5" style="height: 260px"></BaseHighCharts>
        </template>
      </BaseLongCard>
    </div>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseHighCharts from "@/components/BaseHighCharts/index.vue";
import BaseLongCard from '@/components/BaseLongCard/index.vue'
import BaseMiddleCard from '@/components/BaseMiddleCard/index.vue'
import Charts from "@/components/Charts/Charts.vue";

import { onMounted, ref } from 'vue'
import cxdrjhdcl from '@/assets/images/cardTitle/cxdrjhdcl.png'
import cxrjhdcl from '@/assets/images/cardTitle/cxrjhdcl.png'
import dclqs from '@/assets/images/cardTitle/dclqs.png'
import qrjh from '@/assets/images/cardTitle/qrjh.png'
import qrsj from '@/assets/images/cardTitle/qrsj.png'
import { getAchievingRateToday, getActualOnlineAndOutlineCarsNumToday, getPutIntoAndOutCountToday } from '@/service/mes'

import { Options1, Options2, Options3, Options4, Options5 } from "./options";

const options1 = ref(Options1);
const options2 = ref(Options2);
const options4 = ref(Options4);
const options3 = ref(Options3);
const options5 = ref(Options5);

const getData1 = async () => {
  try {
    const res = await getPutIntoAndOutCountToday({ cxname: '总装A线生产线' })

    // const res = [
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     outcount: "4",
    //     planDate: "2025-01-10",
    //     putintocount: "10"
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     outcount: "5",
    //     planDate: "2025-01-10",
    //     putintocount: "7"
    //   }
    // ]
    const data1 = res.map(item => item.putintocount)
    const data2 = res.map(item => item.outcount)
    const x = res.map(item => item.planDate)
    options4.value.series[0].data = data1
    options4.value.series[1].data = data2
    options4.value.xAxis.data = x
  } catch (err) {
    console.log(err)
  }
}

const getData2 = async () => {
  try {
    const res = await getAchievingRateToday({ cxname: '总装A线生产线' });

    // const res = [
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 0.5
    //   }
    // ]
    const x = res.map(item => item.planDate);
    const y = res.map(item => item.rate);
    options2.value.xAxis.data = x;
    options2.value.series[0].data = y;
  }
  catch (error) {
    console.log(error);
  }
}
const getData3 = async () => {
  try {
    const res = await getAchievingRateToday({ cxname: '总装A线生产线' })

    // const res = [
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 1
    //   },

    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-04",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-05",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-06",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-07",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-08",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-09",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 1
    //   }
    // ]
    const ave = res.reduce((acc, cur) => acc + cur.rate, 0) / res.length;
    options1.value.series[0].data = [
      ['未达成率', 1 - ave],
      ['达成率', ave]
    ]
  } catch (err) {
    console.log(err)
  }
}

const getData4 = async () => {
  try {
    const res = await getActualOnlineAndOutlineCarsNumToday({ cxname: '总装A线生产线' })

    // const res = [
    //   {
    //     lzsj: "2025-01-10",
    //     onlinecount: "3",
    //     outlinecount: "3",
    //     scxmc: "总装商用车专线生产线"
    //   }
    // ]

    const data1 = res.map(item => item.onlinecount)
    const data2 = res.map(item => item.outlinecount)
    const x = res.map(item => item.lzsj)
    options3.value.series[0].data = data1
    options3.value.series[1].data = data2
    options3.value.xAxis.data = x
  } catch (error) {
    console.log(error);
  }
}

const getData5 = async () => {
  try {
    const res = await getAchievingRateToday({ cxname: '总装A线生产线' })

    // const res = [
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 1
    //   },

    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-04",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-05",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-06",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-07",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-08",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-09",
    //     rate: 1
    //   },
    //   {
    //     name: "总装商用车专线生产线                                        ",
    //     planDate: "2025-01-10",
    //     rate: 1
    //   }
    // ]
    options5.value.series[0].data = [
      ['未达成率', 1 - res[0].rate],
      ['达成率', res[0].rate]
    ]
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getData1()
  getData2()
  getData3()
  getData4()
  getData5()
})
</script>
<style lang="less" scoped>
.card_long {
  margin-top: -50px;
  margin-left: auto; // 修改此处，使元素自动靠右
}

.card_middle {
  margin-top: 180px;
}
</style>
