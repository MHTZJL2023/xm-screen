import { markRaw } from 'vue';
import { MainLayout } from '@/layouts/index';
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouterInterface } from './types';
import type { RouteRecordRaw } from 'vue-router';
import asyncRouterMap from './asyncRouterMap';

/**
 * @description:  前端未找到页面路由
 * @return {*}
 */
const notFoundRouter: RouterInterface = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  meta: { title: '404', hidden: true },
};

/**
 * @description: 静态本地基础路由
 * @return {*}
 */
const constantRouterMap: RouterInterface[] = [
  {
    path: '/login',
    name: 'login',
    component: markRaw(() => import('@/views/login/index.vue')),
  },
  {
    path: '/403',
    name: '403',
    component: markRaw(() => import('@/views/403.vue')),
  },
  {
    path: '/404',
    name: '404',
    component: markRaw(() => import('@/views/404.vue')),
  },
];

/**
 * @description: 根目录 动态获取
 * @return {*}
 */
const rootRouter: RouterInterface = {
  path: '/',
  redirect: '/login',
  meta: { title: 'login' },
  component: markRaw(MainLayout),
  children: [
    ...asyncRouterMap,
  ],
};

const router: any = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRouterMap, rootRouter] as RouteRecordRaw[],
});

export default router;
export { asyncRouterMap, constantRouterMap, notFoundRouter, rootRouter };

// 重置路由
export const resetRouter = () => {
  const newRouter: any = createRouter({
    history: createWebHashHistory(),
    routes: [...constantRouterMap] as RouteRecordRaw[],
  });
  router.matcher = newRouter.matcher;
};
