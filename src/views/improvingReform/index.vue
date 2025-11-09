<template>
  <BasePageView>
    <template #footer>
      <BaseCard :title="cxclzzzt" class="cxclzzzt">
        <a-table class="my-table" size="small" :columns="columns" :data-source="data" :pagination="false"
          :scroll="{ y: '200px' }" style="height: 240px;margin-top: 5px;"></a-table>
      </BaseCard>
      <BaseCard :title="cxcqrx">
        <BaseHighCharts :options="options" style="height: 240px;" />
      </BaseCard>
    </template>
  </BasePageView>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseHighCharts from "@/components/BaseHighCharts/index.vue";

import { onMounted, ref } from "vue";
import cxclzzzt from "@/assets/images/cardTitle/cxclzzzt.png";
import cxcqrx from '@/assets/images/cardTitle/cxcqrx.png'
import { getCountAttendance } from '@/service/ewh'
import { getCarInfo, getCxInfo } from '@/service/mes'

import { Options } from "./options";

const options = ref(Options);

const pieData = ref([
  { value: 1048, name: 'XX部门' },
  { value: 735, name: 'XX部门' },
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
]

const data = ref([])

const getCxcqrx = async () => {
  try {
    // const res1 = await getCxInfo()
    // let data: any = []
    // res1.forEach(async (item, index) => {
    const res = await getCountAttendance({
      scxid: '310'
    })

    data.push({ value: res.count, name: item.scxmc })

    // })
    pieData.value = data
  } catch (err) {
    console.log(err)
  }
}

const getCxclzzzt = async () => {
  try {
    const res = await getCarInfo({
      scxid: '310'
    })
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

onMounted(() => {
  getCxclzzzt()
  getCxcqrx()
})
</script>
<style lang="less" scoped>
.cxclzzzt {
  margin-right: 144px;
}
</style>
