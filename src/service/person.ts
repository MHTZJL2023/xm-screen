import request from '@/utils/request';

const API = {
  personList: "/person/realPosition/getPersonList", // 获取人员信息数据
  areaList: '/person/realPosition/getAreaList', // 获取围栏区域信息数据
  cardAlarmForMonth: '/person/realPosition/getCardAlarmForMonth', // 获取卡的告警信息(近30天)
  cardAlarmForToday: '/person/realPosition/getCardAlarmForToday', // 获取卡的告警信息(当日)
  lowCardPowerInfo: '/person/realPosition/getLowCardPowerInfo', // 获取低电量卡的信息
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
