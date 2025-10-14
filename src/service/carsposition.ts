import request from '@/utils/request';

const API = {
  carPositionByclch: "/api2/carsposition/CarsPositionManager/getCarPositionByclch", // 根据车辆车号获取当日车辆定位数据
};


// 根据车辆车号获取当日车辆定位数据
export const getCarPositionByclch = async (params: { clch: string }) => {
  return request.get({
    url: API.carPositionByclch,
    params
  });
};
