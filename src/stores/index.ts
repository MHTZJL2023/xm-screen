/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2025-01-02 17:55:31
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2025-03-11 11:17:26
 * @FilePath: /base-big-screen/src/stores/index.ts
 * @Description:
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
export * from './modules';
