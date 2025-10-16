import request from '@/utils/request';

const API = {
  hiddenDangerAbarbeitungRate: "/api3/saveeyes/saveEyesManager/getHiddenDangerAbarbeitungRate", //计算近30天隐患整改率
  hiddenDangerInvestigationRate: '/api3/saveeyes/saveEyesManager/getHiddenDangerInvestigationRate' // 计算近30天隐患排查率
};


// 计算近30天隐患整改率
export const getHiddenDangerAbarbeitungRate = async () => {
  return request.get({
    url: API.hiddenDangerAbarbeitungRate,
  });
};

// 计算近30天隐患排查率
export const getHiddenDangerInvestigationRate = async () => {
  return request.get({
    url: API.hiddenDangerInvestigationRate,
  });
};
