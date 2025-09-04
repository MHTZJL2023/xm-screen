import { title } from "@/config";

export const Options = {
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
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 25,
      dataLabels: {
        enabled: true,
        format: '{point.y}人</br>{point.name}',
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
      ['XX部门', 23],
      ['XY部门', 18],
    ],
  }],
  credits: {
    enabled: false // 添加这一行来隐藏highcharts.com标志
  }
}
