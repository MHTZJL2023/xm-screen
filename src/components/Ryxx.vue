<template>
  <BaseCard title="人员信息" :title-type="true" class="card">
    <div class="static">在岗人数：<span class="value">124</span></div>
    <div class="static">离岗人数：<span class="value">124</span></div>
    <div class="content">
      <div class="chart">
        <Charts :options="options" height="200px" style="width: 100%;"></Charts>
      </div>
      <div class="btns">
        <a-button class="my-button-custom" style="margin-top: 50px;">实时定位</a-button>
        <a-button class="my-button-custom" style="margin-top: 40px;">轨迹回放</a-button>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import Charts from "@/components/Charts/Charts.vue";

import { onMounted, ref } from "vue";


const options = ref({
  color: ['#469485', '#3b7fa2'],
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#05102580',
    borderColor: '#0eebff',
    textStyle: {
      color: '#cdecfa',
    },
  },
  legend: {
    show: false,
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '在岗' },
        { value: 735, name: '离岗' },
      ],
      label: {
        color: '#fff',
        fontSize: '14px',
        formatter: (params) => {
          const total = options.value.series[0].data.reduce((sum, item) => sum + item.value, 0);
          const percentage = ((params.value / total) * 100).toFixed(1);
          return `${percentage}%\n${params.name}`;
        }
      }
    }
  ]
})

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
  left: -600px;
  top: -420px;
  width: 420px;
  height: 400px;
}


.static {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 2px 20px;
  line-height: 48px;
  font-size: 18px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
}

.content {
  display: flex;

  .chart {
    width: 70%;
  }

  .bts {
    width: 30%;
  }
}

.value {
  width: 160px;
  text-align: center;
}
</style>
