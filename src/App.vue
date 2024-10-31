<template>
  <a-config-provider :locale="zhCN" :theme="getConfig">
    <router-view />
  </a-config-provider>
</template>
<script setup lang="ts">
import autofit from 'autofit.js';
import 'dayjs/locale/zh-cn';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';

import { onMounted, computed, nextTick } from 'vue';
import { theme } from 'ant-design-vue';
import { system, title } from '@/config/index';
dayjs.locale('zh-cn');

const getConfig = computed(() => ({
  algorithm:
    system.theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: system.skin,
  },
}));

/**
 * 配置
 * @param {*} el
 * @param {*} dialogContext
 * @return {*}
 */

onMounted(async () => {
  const doms = document.getElementsByTagName('title');
  await nextTick();
  autofit.init({
    dh: 1080,
    dw: 1920,
    el: '#app',
    resize: true,
  });

  if (doms[0]) doms[0].innerHTML = title;
});
</script>
