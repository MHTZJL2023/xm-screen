import request from '@/utils/request';

const API = {
  actualOnlineAndOutlineCarsNumToday: "/mes/MesManager/getActualOnlineAndOutlineCarsNumToday", // 统计产线出勤人数
  achievingRateToday: '/mes/MesManager/getAchievingRateToday',
  productionWarnRecord: '/mes/MesManager/getProductionWarnRecord',
  productionWarnCarsRate: '/mes/MesManager/getProductionWarnCarsRate',
  carInfo: '/mes/MesManager/getCarInfo',
  toPutIntoAndOutPlanRecord: '/mes/toPutIntoAndOutPlanRecord',
  toOnlineAndOutlineCarsRecord: 'mes/toOnlineAndOutlineCarsRecord'

};

// 统计各产线当日实际上线、下线扫描车辆台数
export const getActualOnlineAndOutlineCarsNumToday = async (params: { cxname: string }) => {
  return request.get({
    url: API.actualOnlineAndOutlineCarsNumToday,
    params
  });
};

// 计算当日投入和产出计划达成率
export const getAchievingRateToday = async (params: { cxname: string }) => {
  return request.get({
    url: API.achievingRateToday,
    params
  });
};

// 根据车号获取近7日对应生产异常记录
export const getProductionWarnRecord = async (params: { clch: string }) => {
  return request.get({
    url: API.productionWarnRecord,
    params
  });
};

// 近7日异常投产车辆台数占比
export const getProductionWarnCarsRate = async (params: { cxname: string }) => {
  return request.get({
    url: API.productionWarnCarsRate,
    params
  });
};

// 产线在制品生产异常记录
export const getCarInfo = async (params: { cxname: string }) => {
  return request.get({
    url: API.carInfo,
    params
  });
};

// 查询产线车间投入、产出计划记录
export const getToPutIntoAndOutPlanRecord = async (params: { scxmc: string, day: string, type: string }) => {
  return request.get({
    url: API.toPutIntoAndOutPlanRecord,
    params
  });
};

// 查询产线实际上线下线扫描车辆记录
export const getToOnlineAndOutlineCarsRecord = async (params: { scxmc: string, day: string, lzcz: string }) => {
  return request.get({
    url: API.toOnlineAndOutlineCarsRecord,
    params
  });
};
