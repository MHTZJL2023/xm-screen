import request from '@/utils/request';

const API = {
  getCarDesignImage: "/api/v1/getCarDesignImage", // 获取车辆设计图
  getAgvResultStitch: '/api/v1/getAgvResultStitch', // 获取拼接图⽚
  uploadCarDesignImage: '/api/v1/uploadCarDesignImage', // 上传车辆设计图-测试
  carDesignImageUpload: '/api/v1/carDesignImageUpload',// 上传车辆设计图-生产
  carStart: '/api/v1/start', // 启动车辆
  carReset: '/api/v1/reset', // 复位车辆
  carStop: '/api/v1/stop', // 停止车辆
};

// 获取车辆设计图
export const getCarDesignImage = async (data: { clbh: string }) => {
  return request.post({
    url: API.getCarDesignImage,
    data
  });
};

// 获取拼接图⽚
//task_id
export const getAgvResultStitch = async (data: { task_id: string }) => {
  return request.post({
    url: API.getAgvResultStitch,
    data
  });
};

/**
 * 上传车辆设计图
 *clbh	车辆编号
 *imageFile	设计图
 *designImageTypeCode	车辆设计图类型
 *designImageTypeName	车辆设计图类型名称
 */
export const uploadCarDesignImage = async (data: any) => {
  return request.post({
    url: API.uploadCarDesignImage,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data
  });
};

export const carDesignImageUpload = async (data: any) => {
  return request.post({
    url: API.carDesignImageUpload,
    data
  });
};

/**
 * 启动车辆
 * clbh	车辆编号
 * mode	工作模式
 * photo_side	拍照方向
 * start_time	开始时间
 */
export const carStart = async (data: any) => {
  return request.post({
    url: API.carStart,
    data
  });
};

/**
 * 复位车辆
 */
export const carReset = async () => {
  return request.post({
    url: API.carReset,
  })
}

/**
 * 停止车辆
 */

export const carStop = async () => {
  return request.post({
    url: API.carStop,
  })
}
