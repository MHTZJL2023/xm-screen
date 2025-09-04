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
export const Options2 = {
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
