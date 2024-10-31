/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-09-12 17:13:07
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-15 15:33:43
 * @FilePath: /matrix/src/utils/common.ts
 * @Description:
 */

import { floor } from 'lodash-es';

/**
 * 一维数组拆分
 * 获取二维数组
 * @param {any} arr // 源数组
 * @param {number} len // 拆分长度
 * @return {*}
 */
export const getArrGroup = (arr: any[], len: number) => {
  let index: number = 0;
  const newArray: any[] = [];
  while (index < arr.length) {
    newArray.push(arr.slice(index, (index += len)));
  }
  return newArray;
};

/**
 * 获取图表区展示区间值
 * @param {number} minValue // 最小值
 * @param {number} maxValue // 最大值
 * @return {*}
 */
export const getChartRange = (minValue: number, maxValue: number) => {
  const diff = maxValue - minValue;
  const arr: any = [];

  if (minValue === 0) {
    arr[0] = 0;
    arr[1] = null;
  } else if (minValue < diff) {
    arr[0] = floor(minValue - (diff - minValue), diff < 1 ? 2 : 0);
    arr[1] = floor(maxValue + (diff - minValue), diff < 1 ? 2 : 0);
  } else {
    arr[0] = floor(minValue - diff, diff < 1 ? 2 : 0);
    arr[1] = floor(maxValue + diff, diff < 1 ? 2 : 0);
  }
  if (arr[0] < 0) arr[0] = 0;
  return arr;
};

/**
 * 获取默认保留小数点后位数
 *
 * @param {any} value
 * @returns {any}
 */
export const getDecimals = (value: any) => {
  if (!value) return 0;
  // 将数字转换为字符串
  const numStr = value.toString();
  // 查找小数点的位置
  const dotIndex = numStr.indexOf('.');
  if (dotIndex === -1) {
    // 没有小数点，返回0
    return 0;
  }
  // 获取小数点后的部分
  const decimalPart = numStr.slice(dotIndex + 1);
  // 去除前导零
  const trimmedDecimalPart = decimalPart.replace(/^0+/, '');
  // 返回小数位数长度，如果去除前导零后为0，则返回0
  return trimmedDecimalPart === '0' ? 0 : trimmedDecimalPart.length;
};
