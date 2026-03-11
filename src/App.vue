<template>
  <a-config-provider :locale="zhCN" :theme="getConfig">
    <router-view />
  </a-config-provider>
</template>
<script setup lang="ts">
import { theme } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import autofit from 'autofit.js';
import axios from 'axios';
import dayjs from 'dayjs';
import JSEncrypt from 'jsencrypt';
import { onUnmounted, ref } from 'vue';
import { computed, nextTick, onMounted } from 'vue';
import { system, title } from '@/config/index';
import { useUEInterface } from '@/hooks';
import { API, BASE_URL } from '@/service/video';

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
const key = ref('');
const getPublicKey = async () => {
  console.log('开始获取公钥...', BASE_URL, API.getPublicKey);
  try {
    const response = await axios.get(`${BASE_URL}${API.getPublicKey}`);
    key.value = response.data.data.publicKey;
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
const encryptPassword = async (password, publicKey) => {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  const encrypted = encryptor.encrypt(password);
  if (!encrypted) {
    throw new Error('密码加密失败');
  }
  return encrypted;
};

/* 刷新 token */
const refreshToken = async () => {
  try {
    await getPublicKey();
    const res = await axios.post(`${BASE_URL}${API.getToken}`, {
      username: 'system',
      password: encryptPassword('jlkc2026', key.value), // 实际开发建议参考ICC规范进行RSA加密
      grant_type: 'password',
      public_key: key.value,
      client_id: 'futong',
      client_secret: '3465ee4b-bff5-4915-adee-82db6d58ac2b',
    });

    if (!response.ok) {
      throw new Error('token 刷新失败');
    }
    console.log('res:', res);
    if (res.data && res.data.data) {
      token.value = res.data.data.accessToken;
      console.log('Token获取成功:', token.value);
      window.ue5('Token', token.value);
    }
    console.log('token 刷新成功', data);
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
