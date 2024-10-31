/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-01-16 15:45:52
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-09-20 17:59:20
 * @Description:
 * navTheme - sidebar theme ['dark', 'light'] 两种主题  只对 sidemenu、 topmenu布局有效
 */

export const system = {
  theme: 'dark',
  skin: '#0083b2',
};

export const title = '矩阵平台';
export const isProduction = import.meta.env.VITE_NODE_ENV == 'production' && import.meta.env.VITE_APP_PREVIEW != 'true';
