/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 10:48:43
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-31 08:58:30
 * @FilePath: /vite-project/vite.config.ts
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `
          @import "@/assets/style/global.less";
          @import "@/assets/style/less/button.less";
          @import "@/assets/style/less/global.less";
          @import "@/assets/style/less/card.less";
          @import "@/assets/style/less/tabs.less";
          @import "@/assets/style/less/table.less";
          @import "@/assets/style/less/form.less";
          @import "@/assets/style/less/select.less";
          @import "@/assets/style/less/radio.less";
          @import "@/assets/style/less/checkbox.less";
          @import "@/assets/style/less/input.less";
          @import "@/assets/style/less/picker.less";
          @import "@/assets/style/less/collapse.less";
          @import "@/assets/style/less/popover.less";
          @import "@/assets/style/less/modal.less";
          @import "@/assets/style/less/descriptions.less";
          @import "@/assets/style/less/tree.less";
          `,
      },
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://172.16.16.35:30501/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
