<template>
  <BaseCard title="人员信息" :title-type="true" class="card">
    <div class="static">
      在岗人数：
      <span class="value">{{ personInfo.online }}人</span>
    </div>
    <div class="static">
      离岗人数：
      <span class="value">{{ personInfo.outline }}人</span>
    </div>
    <div class="content">
      <!-- <div class="chart">
        <Charts :options="options" height="200px" style="width: 100%;"></Charts>
      </div> -->
      <div class="btns">
        <!-- <a-button class="my-button-custom" style="margin-top: 50px;">实时定位</a-button> -->
        <a-button
          class="my-button-custom"
          @click="visible = true"
          style="width: 30%; margin-top: 10px">
          轨迹回放
        </a-button>
      </div>
    </div>
  </BaseCard>
  <a-modal
    class="my-modal"
    title="轨迹回放"
    :footer="null"
    v-model:visible="visible"
    @cancel="visible = false"
    width="60vw"
    centered>
    <iframe
      src="http://192.168.1.9:8000/history#/person/?token=jGwv0xDzYaSVX0cV5EZ0"
      width="100%"
      height="600px"></iframe>
  </a-modal>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';

import { onMounted, ref } from 'vue';
import { countPersonStatus } from '@/service/person';

const personInfo = ref<any>({});
const visible = ref(false);
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
    left: 'left',
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
        formatter: params => {
          const total = options.value.series[0].data.reduce(
            (sum, item) => sum + item.value,
            0,
          );
          const percentage = ((params.value / total) * 100).toFixed(1);
          return `${percentage}%\n${params.name}`;
        },
      },
    },
  ],
});

const getData = async () => {
  const res = await countPersonStatus();

  // const res = {
  //   code: 0,
  //   message: "成功",
  //   online: 2,
  //   outline: 3,
  //   total: 5
  // }

  personInfo.value = res;
  options.value.series[0].data = [
    { value: res.online, name: '在岗' },
    { value: res.outline, name: '离岗' },
  ];
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: 20px;
  top: 160px;
  width: 420px;
  height: 250px;
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
  margin: 15px 0;
}

.content {
  display: flex;

  .chart {
    width: 70%;
  }

  .btns {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
  }
}

.value {
  width: 160px;
  text-align: center;
}
</style>
