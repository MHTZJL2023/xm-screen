<template>
  <BasePageView>
    <template #footer>
      <BaseCard :title="cxclzzzt" class="cxclzzzt">
        <a-table
          class="my-table"
          size="small"
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :scroll="{ y: '200px' }"
          style="height: 240px; margin-top: 5px"></a-table>
      </BaseCard>
      <BaseCard :title="cxcqrx">
        <Charts :options="options" style="height: 240px" />
      </BaseCard>
    </template>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';
import Charts from '@/components/Charts/Charts.vue';

import { onMounted, ref } from 'vue';
import cxclzzzt from '@/assets/images/cardTitle/cxclzzzt.png';
import cxcqrx from '@/assets/images/cardTitle/cxcqrx.png';
import { getCountAttendance } from '@/service/ewh';
import { getCarInfo } from '@/service/mes';

import { Options } from './options';

const options = ref(Options);

const pieData = ref([
  { value: 1048, name: 'X2部门' },
  { value: 735, name: 'X1部门' },
]);

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
  },
  {
    title: '车辆状态',
    dataIndex: 'remark',
    key: 'remark',
    align: 'center',
  },
  {
    title: '车号',
    dataIndex: 'clch',
    key: 'clch',
    align: 'center',
  },
  {
    title: '生产订单号',
    dataIndex: 'aufnr',
    key: 'aufnr',
    align: 'center',
  },
];

const data = ref([]);

const getCxcqrx = async () => {
  try {
    let data1: any = [];
    const res = await getCountAttendance({
      scxid: '310',
    });

    data1.push({ value: res.count, name: item.gwmc });
    pieData.value = data1;

    options.value.series[0].data = pieData.value.map(item => item.value);
    options.value.xAxis.data = pieData.value.map(item => item.name);
  } catch (err) {
    console.log(err);
  }
};

const getCxclzzzt = async () => {
  try {
    const res = await getCarInfo({
      scxid: '310',
    });
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
    // ]
    data.value = res.map((item, index) => {
      return {
        ...item,
        index: index + 1,
      };
    });
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getCxclzzzt();
  getCxcqrx();
});
</script>
<style lang="less" scoped>
.cxclzzzt {
  margin-right: 144px;
}
</style>
