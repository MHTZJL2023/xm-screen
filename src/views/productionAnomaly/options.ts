import * as echarts from 'echarts';

export const Options1 = {
  grid: {
    right: '1%',
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#05102580',
    borderColor: '#0eebff',
    textStyle: {
      color: '#fff',
    },
    formatter: (params) => {
      if (params && params.length > 0) {
        const { name } = params[0];
        let value = '';
        params.forEach((item) => {
          const _value = item.value === 0 || item.value ? item.value : '-';
          value += `<br />${item.marker} ${item.seriesName}:  <span style="color: ${item.color}">${_value}%</span>`;
        });
        return `${name} ${value}`;
      }
      return '';
    },
  },
  xAxis: {
    type: 'category',
    data: ['x1', 'x2', 'x3', 'x4', 'x5',],
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
  },
  yAxis: {
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
      name: '隐患排查率',
      data: [1, 3, 5, 7, 4, 3, 2, 4, 6],
      type: 'line',

      // symbolSize: 10,
      smooth: true,
      lineStyle: {
        width: 1,
        color: '#8ef9b1',
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#5ac49a',
          },
          {
            offset: 1,
            color: '#5ac49a10',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
} as any;
export const Options2 =
  {
    colors: ['#469485', '#3b7fa2'],
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
      bottom: '28%',
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
        name: '频率',
        data: [1, 4, 7, 5, 2, 3, 5],
        type: 'bar',
        barMaxWidth: 15,
        color: 'rgba(24, 190, 231, 1)',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: '#469485' },
            { offset: 0, color: '#3b7fa2' },
          ]),
        },
      },
    ],
  } as any;

