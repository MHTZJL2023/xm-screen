/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-02-07 16:36:18
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-30 17:28:03
 * @Description:
 */
import { defineStore } from 'pinia';
import { message } from 'ant-design-vue';

export type TabsType = {
  title: string | unknown;
  key: string;
};
interface MultiTabState {
  tabs: TabsType[];
}

export const useMultiTab = defineStore({
  id: 'multi-tab',
  state: (): MultiTabState => ({
    tabs: [],
  }),
  getters: {
    /* 获取tabs列表 */
    getTabs(): TabsType[] {
      return [...this.tabs!];
    },
  },
  actions: {
    addTab(tab: TabsType) {
      const tabs = [...this.tabs!];
      const index: number = tabs.findIndex(item => item.key === tab.key);
      index === -1 ? this.tabs?.push(tab) : null;
    },
    removeTab(path: string, key?: string) {
      const tabs = [...this.tabs!];
      const index: number = tabs.findIndex(item => item.key == path);
      let spliceList;
      switch (key) {
        case 'closeRight':
          spliceList = this.tabs?.splice(index + 1, tabs.length);
          spliceList.length == 0 && message.info('右侧侧没有标签');
          break;
        case 'closeLeft':
          spliceList = this.tabs?.splice(0, index);
          spliceList.length == 0 && message.info('左侧没有标签');
          break;
        case 'closeAll':
          this.tabs = [tabs[index]];
          tabs.length == 1 && message.info('这是最后一个标签了, 无法被关闭');
          break;
        default:
          if (tabs.length > 1) {
            this.tabs?.splice(index, 1);
          } else {
            message.info('这是最后一个标签了, 无法被关闭');
          }
          break;
      }
    },
  },
  persist: true,
});
