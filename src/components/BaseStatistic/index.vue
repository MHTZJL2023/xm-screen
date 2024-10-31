<script lang="ts" setup>
import { isNumber, toString } from 'lodash-es';
import BaseNumberAnimation from '@/components/BaseNumberAnimation/index.vue';

type dataSourceItemType = {
  label: string;
  value: number;
  fontSize?: string;
  unit?: string;
  color?: string;
  bgColor?: string;
  decimals?: number;
  animation?: boolean;
  direction?: string; // vertical | horizontal
};
withDefaults(
  defineProps<{
    dataSource: dataSourceItemType[];
    itemStyle?: any; // 栏目样式
    itemClass?: any; // 栏目样式
    span?: number; // 拆分个数
    direction?: string; // vertical | horizontal
    gutter?: any;
    height?: string;
  }>(),
  {
    itemStyle: () => ({}),
    itemClass: () => ({}),
    span: 8,
    direction: 'horizontal',
    gutter: [5, 5],
  },
);

/**
 * 获取默认保留小数点后位数
 *
 * @param {any} value
 * @returns {any}
 */
const getDecimals = (value: any) => {
  if (!value) return 0;
  const numberString = toString(value);
  return (numberString.match(/\./g) || []).length;
};

/**
 * value 是否显示
 *
 * @param {any} value
 * @returns {any}
 */
const getValView = (value: any) => {
  if (value === undefined || value === null) return '-';
  return value;
};
</script>

<template>
  <a-row :gutter="gutter" class="statistic-container" style="margin: 0">
    <a-col
      v-for="(item, index) in dataSource"
      :key="index"
      :span="span"
      class="item-col"
    >
      <div
        v-if="direction === 'vertical' || item.direction === 'vertical'"
        class="item item-vertical"
        :style="{ ...itemStyle, background: item.bgColor, height }"
        :class="itemClass"
      >
        <div class="content">
          <BaseNumberAnimation
            v-if="isNumber(item.value)"
            class="value"
            :end-value="item.value"
            :decimals="item.decimals || getDecimals(item.value)"
            :style="{ color: item.color, fontSize: item.fontSize }"
          ></BaseNumberAnimation>
          <div
            v-else
            class="value"
            :style="{ color: item.color, fontSize: item.fontSize }"
          >
            {{ getValView(item.value) }}
          </div>
          <div class="unit" :style="{ color: item.color }">{{ item.unit }}</div>
        </div>
        <div>{{ item.label }}</div>
      </div>

      <div
        v-else
        class="item item-horizontal"
        :style="{ ...itemStyle, background: item.bgColor, height }"
        :class="itemClass"
      >
        <div>{{ item.label }}</div>
        <BaseNumberAnimation
          v-if="isNumber(item.value)"
          class="value"
          :end-value="item.value"
          :decimals="item.decimals || getDecimals(item.value)"
          :style="{ color: item.color, fontSize: item.fontSize }"
        ></BaseNumberAnimation>
        <div
          v-else
          class="value"
          :style="{ color: item.color, fontSize: item.fontSize }"
        >
          {{ getValView(item.value) }}
        </div>
        <div class="unit" :style="{ color: item.color }">{{ item.unit }}</div>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped lang="less">
.statistic-container {
  width: 100%;
  margin: 0;
  .item-col {
    display: flex;
    flex-direction: column;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    line-height: 1.5;
    flex-grow: 1;
    .value {
      font-size: 22px;
      line-height: 100%;
      color: @primary-color;
    }
    .unit {
      color: @primary-color;
    }

    .content {
      display: flex;
      align-items: baseline;
      gap: 3px;
      white-space: nowrap;
    }
  }

  .item-horizontal {
    align-items: baseline;
    gap: 5px;
  }

  .item-vertical {
    flex-direction: column;
  }
}
</style>
