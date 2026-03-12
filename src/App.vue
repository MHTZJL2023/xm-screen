<template>
  <a-config-provider :locale="zhCN" :theme="getConfig">
    <router-view />
  </a-config-provider>
</template>
<script setup lang="ts">
import { theme } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import autofit from 'autofit.js';
import dayjs from 'dayjs';
import JSEncrypt from 'jsencrypt';
import { onUnmounted, ref } from 'vue';
import { computed, nextTick, onMounted } from 'vue';
import { system, title } from '@/config/index';
import { useUEInterface } from '@/hooks';
import { getPublicKey, getToken } from '@/service/video';

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const { setupUEInterface } = useUEInterface();

const getConfig = computed(() => ({
  algorithm:
    system.theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: system.skin,
  },
}));

// 定时器引用
let tokenTimer: number | null = null;
const token = ref('');
const key = ref('111');
const publicKey = ref('');
const getPublicKey2 = async () => {
  try {
    const response = await getPublicKey();
    console.log('公钥获取成功:', response.publicKey);
    publicKey.value = response.publicKey;
    key.value =
      '-----BEGIN PUBLIC KEY-----' +
      response.publicKey +
      '-----END PUBLIC KEY-----';
  } catch (error) {
    console.error('获取公钥失败:', error);
    throw error;
  }
};

/**
 * 第二步：使用 RSA 公钥加密密码
 * @param {string} password 明文密码
 * @param {string} publicKey 公钥字符串
 */
const encryptPassword = (password, publicKey) => {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  const encrypted = encryptor.encrypt(password);
  console.log('密码已加密:', encrypted);
  return encrypted;
};

/* 刷新 token */
const refreshToken = async () => {
  try {
    await getPublicKey2();
    console.log('key.value', key.value);
    const res = await getToken({
      username: 'system',
      password: encryptPassword('jlkc2026', key.value), // 实际开发建议参考ICC规范进行RSA加密
      grant_type: 'password',
      public_key: publicKey.value,
      client_id: 'futong',
      client_secret: '3465ee4b-bff5-4915-adee-82db6d58ac2b',
    });
    console.log('res:accessToken', res);
    token.value = res.access_token;
    console.log('Token获取成功:', token.value);
    localStorage.setItem('access_token', res.token_type + ' ' + token.value);
    window.ue5('Web_RefreshVideoToken', token.value);
    console.log('token 刷新成功', token.value);
  } catch (error: any) {
    console.error('token 刷新异常:', error.message);
  }
};

/* 启动 token 刷新定时器 */
const startTokenTimer = () => {
  const interval = 90 * 60 * 1000; // 90 分钟

  if (tokenTimer) {
    clearInterval(tokenTimer);
  }

  refreshToken(); // 立即执行一次

  tokenTimer = setInterval(() => {
    refreshToken();
  }, interval);
};

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

  setupUEInterface();

  // 启动定时刷新 token
  startTokenTimer();
});

/* 组件卸载时清除定时器 */
onUnmounted(() => {
  if (tokenTimer) {
    clearInterval(tokenTimer);
    tokenTimer = null;
  }
});
</script>
