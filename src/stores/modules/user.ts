/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-10-30 15:46:28
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:37:10
 * @FilePath: /vite-project/src/stores/modules/user.ts
 * @Description:
 */
/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-01-10 16:11:01
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:09:59
 * @Description: 用户信息持久化
 */
import { defineStore } from 'pinia';

interface UserState {
  token?: string;
  loginInfo?: any;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined,
    loginInfo: undefined,
  }),
  getters: {},
  actions: {
    /* 清空token */
    removeToken() {
      delete this.$state.token;
    },

    /* 清空租户信息 */
    removeUserInfo() {
      delete this.$state.loginInfo;
    },

    /* 登录 */
    async login() {
      // const { token_type, access_token, ...userInfo } = await login(headers, {
      //   ...params,
      //   grant_type: 'captcha',
      //   scope: 'all',
      // });
      // this.token = `${token_type} ${access_token}`;
      // this.loginInfo = userInfo;
      this.token = '123123123';
      this.loginInfo = {};
      return this.token;
    },

    async setUserInfo() {
      // this.loginInfo = { ...this.loginInfo, ...userInfo };
    },
    /* 退出登录 */
    async logout() {
      // await logout();
      // delete this.$state.token;
      // delete this.$state.loginInfo;
      delete this.token;
      delete this.loginInfo;
      return true;
    },
  },
  persist: [
    {
      key: 'token',
    },
    {
      key: 'loginInfo',
    },
  ],
});
