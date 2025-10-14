import request from '@/utils/request';

const API = {
  getDefectCount: "/api4/qms/QMSManager/getDefectCount", // 统计各产线当日缺陷数量总数 （实时）
  getCxDpuForWeek: '/api4/qms/QMSManager/getCxDpuForWeek',
  getCxProblemFrequencyForYesterday: '/api4/qms/QMSManager/getCxProblemFrequencyForYesterday'
};

// 统计各产线当日缺陷数量总数 （实时）
export const getDefectCount = async (params: { cxname: string }) => {
  return request.get({
    url: API.getDefectCount,
    params
  });
};

// 获取近7日产线日DPU
export const getCxDpuForWeek = async (params: { name: string }) => {
  return request.get({
    url: API.getCxDpuForWeek,
    params
  });
};

// getCxProblemFrequencyForYesterday
export const getCxProblemFrequencyForYesterday = async (params: { cxname: string }) => {
  return request.get({
    url: API.getCxProblemFrequencyForYesterday,
    params
  });
};
