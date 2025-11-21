import request from '@/utils/request';

const API = {
  personList: "/api7/person/realPosition/getPersonList", // 获取人员信息数据
  areaList: '/api7/person/realPosition/getAreaList', // 获取围栏区域信息数据
  cardAlarmForMonth: '/api7/person/realPosition/getCardAlarmForMonth', // 获取卡的告警信息(近30天)
  cardAlarmForToday: '/api7/person/realPosition/getCardAlarmForToday', // 获取卡的告警信息(当日)
  lowCardPowerInfo: '/api7/person/realPosition/getLowCardPowerInfo', // 获取低电量卡的信息
  countPersonStatus: '/api7/person/realPosition/countPersonStatus', // 人员信息（统计在岗、离岗人数）
  countDeviceStatusNum: '/api7/person/realPosition/countDeviceStatusNum', // 设备状态统计
  getLowCardPowerInfo: '/api7/person/realPosition/getLowCardPowerInfo', // 获取低电量卡的信息
  getRtspUrl: '/api7/person/realPosition/getRtspUrl' // 获取实时视频流地址
};

// 获取人员信息数据
export const getPersonList = async () => {
  return request.post({
    url: API.personList,
  });
};

// 获取围栏区域信息数据
export const getAreaList = async () => {
  return request.post({
    url: API.areaList,
  });
};


// 获取卡的告警信息(近30天)
export const getCardAlarmForMonth = async () => {
  return request.post({
    url: API.cardAlarmForMonth,
  });
};

// 获取卡的告警信息(当日)
export const getCardAlarmForToday = async () => {
  return request.post({
    url: API.cardAlarmForToday,
  });
};

// 获取低电量卡的信息
export const getLowCardPowerInfo = async () => {
  return request.post({
    url: API.lowCardPowerInfo,
  });
};

// 人员信息（统计在岗、离岗人数）
export const countPersonStatus = async () => {
  return request.post({
    url: API.countPersonStatus,
  });
};

// 设备状态统计
export const countDeviceStatusNum = async () => {
  return request.post({
    url: API.countDeviceStatusNum,
  });
};

// 获取实时视频流地址
export const getRtspUrl = async (data: any) => {
  return request.post({
    url: API.getRtspUrl,
    data,
  });
};
