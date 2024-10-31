/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-02-13 10:18:12
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-15 10:14:42
 * @FilePath: /matrix/src/router/types.d.ts
 * @Description: ts
 */
import type { RouteRecordRaw } from 'vue-router';
export interface RouterInterface {
  path: string; // 菜单路径
  redirect?: string; // 重定向
  name?: string; // 路由名称s
  meta?: {
    // 控制项
    hidden?: boolean; // 影藏当前菜单
    hideChildrenInMenu?: boolean; //影藏子菜单
    icon?: any;
    title: string; // 页面title
    keepAlive?: boolean; // 是否缓存页面
    permission?: string[]; // 权限
  };
  component?: any;
  children?: RouterInterface[];
}
