import * as echarts from 'echarts';

export const Options = {
  color: ['#17B7E7', '#ffa800'],
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(6,38,48,0.85)',
    borderColor: 'rgba(0, 118, 144, 1)',
    textStyle: {
      color: 'rgba(205, 236, 250, 1)',
    },
  },
  legend: {
    show: true,
    itemStyle: {
      borderType: 'inherit',
      borderWidth: '1px',
      color: 'inherit',
    },
    textStyle: {
      fontSize: '14px',
      color: '#ffffffff',
    },
    lineStyle: {
      width: '2',
    },
  },
  grid: {
    top: '12%',
    left: '8%',
    right: '5%',
    bottom: '24%',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: ['#ffffff'],
      },
    },
    axisLabel: {
      color: '#ffffff',
      margin: 12,
      maxInterval: 10,
    },
    data: [],
  },
  dataZoom: [
    {
      type: 'inside', // 支持内部鼠标滚动平移
      xAxisIndex: [0, 1],
      zoomOnMouseWheel: true, // 关闭滚轮缩放
      moveOnMouseWheel: true, // 开启滚轮平移
      moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
    },
  ],
  yAxis: {
    name: '',
    type: 'value',
    axisLabel: {
      color: '#ffffff',
      formatter: value => {
        return value.toFixed(1);
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: ['#ffffff'],
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        color: ['#ffffffa0'],
        opacity: 0.1,
      },
    },
  },
  series: [
    {
      name: '人数',
      data: [1, 4, 7, 5, 2, 3, 5],
      type: 'bar',
      barMaxWidth: 15,
      color: 'rgba(24, 190, 231, 1)',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 1, color: 'rgba(14, 135, 235, 1)' },
          { offset: 0, color: 'rgba(35, 253, 226, 1)' },
        ]),
      },
    },
  ],
} as any;
