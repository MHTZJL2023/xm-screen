/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-04-18 15:34:50
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:38:53
 * @FilePath: /vite-project/src/router/guard/base.ts
 * @Description: 基础守卫
 */
import router from '../index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/stores/modules';

const allowList: string[] = ['login', 'map', '403', '404']; // no redirect allowList
const loginRoutePath = '/login';
const defaultRoutePath = '/';

export const useBaiscGuard = () => {
  NProgress.configure({ showSpinner: false });
  router.beforeEach(async (to: any, from: any, next) => {
    NProgress.start();
    const userStore = useUserStore();
    if (userStore.token) {
      if (to.path === loginRoutePath) {
        next({ path: defaultRoutePath });
        NProgress.done();
      } else {
        next();
      }
    } else {
      if (allowList.includes(to.name)) {
        // 在免登录名单，直接进入
        next();
      } else {
        next({ path: loginRoutePath });
        NProgress.done();
      }
    }
  });

  router.afterEach(() => {
    NProgress.done(); // finish progress bar
  });
};
