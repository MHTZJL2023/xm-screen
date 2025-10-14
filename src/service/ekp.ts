import request from '@/utils/request';

const API = {
  warnInfoByClch: "/api5/ekp/ekpManager/getWarnInfoByClch", // 根据车辆车号获取车辆异常记录
};

// 根据车辆车号获取车辆异常记录
export const getWarnInfoByClch = async (params: { clch: string }) => {
  return request.get({
    url: API.warnInfoByClch,
    params
  });
};
