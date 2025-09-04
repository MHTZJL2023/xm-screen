import * as echarts from 'echarts';

export const Options4 = {
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
    data: ['03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03'],
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
      name: '计划日投入',
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
    {
      name: '产出数量',
      data: [1, 3, 5, 3, 3, 6, 8],
      type: 'bar',
      barMaxWidth: 15,
      color: 'rgba(24, 190, 231, 1)',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 1, color: '#353991' },
          { offset: 0, color: '#58b87e' },
        ]),
      },
    },
  ],
} as any;

export const Options3 = {
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
    data: ['03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03'],
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
      name: '实际日投入',
      data: [1, 4, 7, 5, 2, 3, 5],
      type: 'bar',
      barMaxWidth: 15,
      color: 'rgba(24, 190, 231, 1)',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 1, color: '#2c2b86' },
          { offset: 0, color: '#a97ce7' },
        ]),
      },
    },
    {
      name: '产出数量',
      data: [1, 3, 5, 3, 3, 6, 8],
      type: 'bar',
      barMaxWidth: 15,
      color: 'rgba(24, 190, 231, 1)',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 1, color: '#458dbf' },
          { offset: 0, color: '#67d3e0' },
        ]),
      },
    },
  ],
} as any;


export const Options1 = {
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
}

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
          const _value = item.value === 0 || item.value ? item.value * 100 : '-';
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
      name: '达成率',
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

export const Options5 = {
  colors: ['#469485cc', '#3b7fa2cc'],
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    },
    backgroundColor: 'transparent' // 添加这一行使背景透明
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%</br>{point.name}',
        style: {
          color: '#FFFFFF', // 设置字体颜色为白色
          textOutline: 'none', // 可选：去除文字轮廓
          fontSize: '18px'
        }
      },
    }
  },
  series: [{
    name: '',
    data: [
      ['未达成率', 16],
      ['达成率', 12],
    ]
  }],
  credits: {
    enabled: false // 添加这一行来隐藏highcharts.com标志
  }
}
