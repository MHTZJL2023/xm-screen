import request from '@/utils/request';

const API = {
  actualOnlineAndOutlineCarsNumToday: "/api1/mes/MesManager/getActualOnlineAndOutlineCarsNumToday", // 统计产线出勤人数
  achievingRateToday: '/api1/mes/MesManager/getAchievingRateToday',
  productionWarnRecord: '/api1/mes/MesManager/getProductionWarnRecord',
  productionWarnCarsRate: '/api1/mes/MesManager/getProductionWarnCarsRate',
  carInfo: '/api1/mes/MesManager/getCarInfo',
  toPutIntoAndOutPlanRecord: '/api1/mes/toPutIntoAndOutPlanRecord',
  toOnlineAndOutlineCarsRecord: '/api1/mes/toOnlineAndOutlineCarsRecord',
  cxInfo: '/api1/mes/MesManager/getCxInfo',
  getPutIntoAndOutCountToday: '/api1/mes/MesManager/getPutIntoAndOutCountToday',
  getProductionWorkInProcessWarnRecord: '/api1/mes/MesManager/getProductionWorkInProcessWarnRecord',
  getActualOnlineAndOutlineCarsNumWeek: '/api1/mes/MesManager/getActualOnlineAndOutlineCarsNumWeek',
  getPutIntoAndOutCountWeek: '/api1/mes/MesManager/getPutIntoAndOutCountWeek',
  getAchievingRateWeek: '/api1/mes/MesManager/getAchievingRateWeek'
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
export const getCarInfo = async (params: { scxid: string }) => {
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

// 获取产线信息
export const getCxInfo = async () => {
  return request.get({
    url: API.cxInfo,
  });
};

// 获取投入产出计划数量
export const getPutIntoAndOutCountToday = async (params: { cxname: string }) => {
  return request.get({
    url: API.getPutIntoAndOutCountToday,
    params
  });
};

// 获取产线在制品生产异常记录
export const getProductionWorkInProcessWarnRecord = async (params: { cxname: string }) => {
  return request.get({
    url: API.getProductionWorkInProcessWarnRecord,
    params
  });
};

// 获取近7日实际出勤人数
export const getActualOnlineAndOutlineCarsNumWeek = async (params: { cxname: string }) => {
  return request.get({
    url: API.getActualOnlineAndOutlineCarsNumWeek,
    params
  });
};

// 获取投入产出计划数量
export const getPutIntoAndOutCountWeek = async (params: { cxname: string }) => {
  return request.get({
    url: API.getPutIntoAndOutCountWeek,
    params
  });
};

// 获取近7日实际出勤人数
export const getAchievingRateWeek = async (params: { cxname: string }) => {
  return request.get({
    url: API.getAchievingRateWeek,
    params
  });
};
