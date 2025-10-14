/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 10:48:43
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-31 08:58:30
 * @FilePath: /vite-project/vite.config.ts
 * @Description:
 */
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
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
      '/api1': {
        target: 'http://192.168.42.2:8301/',
        changeOrigin: true,
      },
      '/api2': {
        target: 'http://192.168.42.2:8302/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/api3': {
        target: 'http://192.168.42.2:8303/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/api4': {
        target: 'http://192.168.42.2:8304/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/api5': {
        target: 'http://192.168.42.2:8305/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/api6': {
        target: 'http://192.168.42.2:8306/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/api7': {
        target: 'http://192.168.42.2:8307/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
