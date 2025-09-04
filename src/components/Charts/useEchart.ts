/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-05-05 09:46:01
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-03-21 09:48:40
 * @FilePath: /dx-web-dev/src/components/Charts/useEchart.ts
 * @Description:
 */
import * as echarts from 'echarts';
import { merge } from 'lodash-es';

export default function (el: HTMLElement) {
  const echart = echarts.init(el);
  const defaultOption = {
    color: ['#8ef9b1', '#3fb1e3', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8'],
    dataZoom: [
      {
        type: 'inside',
      }
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#3d83f7',
      borderColor: '#3d83f7',
      textStyle: {
        color: '#fff',
        fontSize: '12',
      },
    },
    grid: {
      top: '15%',
      left: '7%',
      right: '9%',
      bottom: '10%',
    },
    // label: {
    //   show: true,
    //   color: '#999',
    // },
    // xAxis: [
    //   {
    //     axisLabel: {
    //       // margin: 16,
    //       textStyle: {
    //         color: '#999',
    //       },
    //       showMinLabel: true,
    //       showMaxLabel: true,
    //     },
    //   },
    // ],
  };
  const setOptions = (options: echarts.EChartsOption, bool: number) => {
    if (bool) {
      echart.setOption(merge({}, defaultOption, options));
    } else {
      echart.setOption(options);
    }
  };

  const updateSize = () => {
    echart.resize();
  };

  window.addEventListener('resize', () => {
    echart.resize();
  });

  return {
    echart,
    setOptions,
    updateSize,
  };
}
