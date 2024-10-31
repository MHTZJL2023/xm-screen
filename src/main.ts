/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 10:48:43
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-31 08:57:39
 * @FilePath: /vite-project/src/main.ts
 * @Description:
 */
import 'animate.css/animate.min.css';
import '@/assets/style/global.less'; // global style

import { createApp } from 'vue';
import pinia from '@/stores';
import useComponents from '@/components';

import App from './App.vue';
import router from './router';
import useAnt from '@/core/ant';

const app = createApp(App);
useAnt(app);
useComponents(app);

app.use(pinia);
app.use(router);

app.mount('#app');
