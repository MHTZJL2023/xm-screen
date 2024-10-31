/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-04-18 15:44:08
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:39:21
 * @FilePath: /vite-project/src/router/guard/permission.ts
 * @Description: 权限管理守卫
 */
import router from '../index';
import { useUserStore, usePermissionStore } from '@/stores/modules';
import type { RouteRecordRaw } from 'vue-router';

export const usePermissionGuard = () => {
  router.beforeEach(async (to: any, from: any, next) => {
    const permissionStore = usePermissionStore();
    const userStore = useUserStore();
    if (userStore.token) {
      if (!permissionStore.routers) {
        const routers = await permissionStore.generateRoutes();
        routers.forEach(item => {
          router.addRoute(item as RouteRecordRaw);
        });
        const redirect = decodeURIComponent(from?.query?.redirect || to?.path);
        if (!permissionStore.checkPermission(to.path)) {
          next({ path: '/403' });
        } else if (to.path === redirect) {
          next({ ...to, replace: true });
        } else {
          next({ path: redirect });
        }
      } else {
        if (!permissionStore.checkPermission(to.path)) {
          next({ path: '/403' });
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
};
