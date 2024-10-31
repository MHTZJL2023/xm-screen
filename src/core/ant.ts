/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-01 14:37:45
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-08-05 15:55:27
 * @FilePath: /base-admin/src/core/ant.ts
 * @Description:
 */
import Antd from 'ant-design-vue';
import { message, Modal, notification } from 'ant-design-vue';
export default (app: any) => {
  app.use(Antd);
  app.config.globalProperties.$message = message;
  app.config.globalProperties.$modal = Modal;
  app.config.globalProperties.$notification = notification;
};
