/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-01-10 16:12:03
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:40:30
 * @Description: 简单的权限校验。由后端提供接口返回的字段用户权限code字段 与前端静态路由的meta.permission字段值做匹配
 * 【前端保存路由结构 由后端接口返回权限字段配置】
 */

import { defineStore } from 'pinia';
import { asyncRouterMap, rootRouter, notFoundRouter } from '@/router';
import { cloneDeep } from 'lodash-es';
import type { RouterInterface } from '@/router/types';

// 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
function hasPermission(route: any, permission: string[]) {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
}

// 过滤
function filterAsyncRouter(routerMap: RouterInterface[], permission: string[]) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(route, permission)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, permission);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

// 获取页面权限以及页面的操作权限 递归
const getRulesData = (rules: any[]) => {
  const ids: string[] = [];
  const actions: any = {};
  const _getList = (list: any[]) => {
    list.forEach((item: any) => {
      ids.push(item.code);
      if (item.actions) {
        actions[item.code] = JSON.parse(item.actions).map(
          (item: { action: any }) => item.action,
        );
      }
      item.routes ? _getList(item.routes) : null;
    });
  };
  _getList(rules);
  return {
    ids,
    actions,
  };
};

type PermissionState = {
  routers: RouterInterface[] | undefined;
  addRouters: RouterInterface[] | undefined;
  permissionIds: string[] | undefined;
  permissionActions: any;
};
export const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routers: undefined,
    addRouters: undefined,
    permissionIds: undefined,
    permissionActions: {},
  }),
  getters: {},
  actions: {
    /* 获取路由 */
    async generateRoutes() {
      // const rulesTree = await rules();
      const rulesTree = [];
      const { ids, actions } = getRulesData([...rulesTree]);
      const routerMap: any = cloneDeep(asyncRouterMap);
      const accessedRouters = filterAsyncRouter(routerMap, ids);
      rootRouter.children = [...accessedRouters, notFoundRouter];

      this.routers = [rootRouter];
      this.addRouters = [...accessedRouters];
      this.permissionIds = [...ids];
      this.permissionActions = { ...actions };
      return this.routers;
    },
    /* 验证是否有权访问 403 默认true  */
    checkPermission(path: string): boolean {
      let flag = true;
      const routerMap: any = [cloneDeep(asyncRouterMap)];
      const _getPermission = (list: RouterInterface[]) => {
        list.forEach((item: RouterInterface) => {
          if (item.path == path) {
            flag = hasPermission(item, this.permissionIds || []);
          } else {
            item.children ? _getPermission(item.children) : null;
          }
        });
      };
      _getPermission(routerMap);
      return flag;
    },
  },
});
