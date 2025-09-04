<template>
  <div class="echart-box">
    <div ref="echartRef" class="content" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import type { EChartsOption } from "echarts";
import { onMounted, ref, watchEffect } from "vue";

import useEchart from "./useEchart";

/* 接收外部参数 */
interface PropsType {
  options: EChartsOption | any;
  width?: string;
  height?: string;
  check?: number;
  click?: (params: any) => void;
}

const props = withDefaults(defineProps<PropsType>(), {
  width: "100%",
  height: "100%",
  check: 1,
});

const echartRef = ref<HTMLElement>();
const echartInstance = ref();
onMounted(() => {
  const { setOptions, echart } = useEchart(echartRef.value!);
  echartInstance.value = echart;
  watchEffect(() => {
    // console.log("props.check", props.check);
    setOptions(props.options, props.check);
  });
  ehcartClick();
});
defineExpose({
  echartRef,
  echartInstance,
});
function ehcartClick() {
  echartInstance.value.getZr().on("click", function (params: any) {
    const pointInPixel = [params.offsetX, params.offsetY];
    const pointInGrid = echartInstance.value.convertFromPixel(
      { seriesIndex: 0 },
      pointInPixel
    );
    const xIndex = pointInGrid[0];
    props.click && props.click(xIndex.toFixed(1));
  });
}
</script>

<style scoped>
.echart-box {
  position: relative;
  height: auto;

  .content {
    /* position: absolute; */
  }
}
</style>
