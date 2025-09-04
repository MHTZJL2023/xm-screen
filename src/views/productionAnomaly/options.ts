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
  colors: ['#469485', '#3b7fa2'],
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    },
    backgroundColor: 'transparent' // 添加这一行使背景透明
  },
  title: {
    text: ''
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 25,
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%</br>{point.name}',
        style: {
          color: '#FFFFFF', // 设置字体颜色为白色
          textOutline: 'none', // 可选：去除文字轮廓
          fontSize: '18px'
        }
      },
    },
    item: {
      color: '#fff',
    }
  },
  series: [{
    type: 'pie',
    name: '人数',
    data: [
      ['未达成率', 23],
      ['达成率', 18],
    ],
  }],
  credits: {
    enabled: false // 添加这一行来隐藏highcharts.com标志
  }
} as any;
