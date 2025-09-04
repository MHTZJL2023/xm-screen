<template>
  <div ref="chartContainer" class="highcharts-container" :style="{ width: width, height: height }"></div>
</template>

<script setup lang="ts">
import * as Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d'
import { nextTick, onMounted, ref, watch } from 'vue';

// 初始化3D模块
if (typeof highcharts3d === 'function') {
  highcharts3d(Highcharts)
}

interface Props {
  options: Highcharts.Options;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%'
});

const chartContainer = ref<HTMLElement | null>(null);
const chartInstance = ref<Highcharts.Chart | null>(null);

// 初始化图表
const initChart = () => {
  if (chartContainer.value) {
    chartInstance.value = Highcharts.chart(chartContainer.value, props.options);
  }
};

// 更新图表数据
const updateChart = () => {
  if (chartInstance.value && props.options) {
    chartInstance.value.update(props.options);
  }
};

// 提供 setData 方法
const setData = (data: any[], seriesIndex = 0) => {
  if (chartInstance.value) {
    chartInstance.value.series[seriesIndex].setData(data);
  }
};

// 获取图表实例
const getChart = () => {
  return chartInstance.value;
};

// 监听 options 变化
watch(() => props.options, () => {
  nextTick(() => {
    updateChart();
  });
}, { deep: true });

// 监听尺寸变化
watch([() => props.width, () => props.height], () => {
  if (chartInstance.value) {
    chartInstance.value.reflow();
  }
});

onMounted(() => {
  initChart();
});

// 暴露方法给父组件
defineExpose({
  getChart,
  setData,
  updateChart
});
</script>
<style scoped>
.highcharts-container {
  width: 100%;
}
</style>
