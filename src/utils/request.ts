/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-01 14:37:45
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 18:06:18
 * @FilePath: /vite-project/src/utils/request.ts
 * @Description:
 */
import axios from 'axios';
import router from '@/router';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import { useUserStore } from '@/stores/modules';
class Request {
  instance: AxiosInstance;
  private readonly options: AxiosRequestConfig;
  constructor(options: AxiosRequestConfig) {
    this.options = options;
    this.instance = axios.create(options);
    this.instance.interceptors.request.use(
      (config: any) => {
        const store = useUserStore();
        const token = store.token;
        config.headers['Tenant-Id'] = '000000';
        config.headers['Authorization'] =
          'Basic bGVtb25fYWRtaW46bGVtb25fc2VjcmV0';
        if (token) {
          config.headers['Lemon-Auth'] = token;
        }
        return config;
      },
      err => {
        return err;
      },
    );

    this.instance.interceptors.response.use(
      res => {
        console.log('xxx', res);
        if (res.data.success !== false) {
          return res.data.data ? res.data.data : res.data;
        }
        message.error(res.data.msg || res.data.error_description || '请求失败');
        throw res.data;
      },
      err => {
        console.log('err', err);
        const store = useUserStore();
        if (err.status === 401 && store.token) {
          store.removeToken();
          message.error('登录已过期！请重新登录');
          router.replace({ name: 'login' });
          router.resetRouter();
        } else {
          message.error(err.message || '请求失败！');
        }
        throw err;
      },
    );
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse>(config)
        .then(res => {
          resolve(res as unknown as Promise<T>);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }
}

export default new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000, // 请求超时时间
});
