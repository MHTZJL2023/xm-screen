import request from '@/utils/request';

const API = {
  countAttendance: "/api6/ewh/ewhManager/countAttendance", // 统计产线出勤人数
};

// 统计产线出勤人数
export const getCountAttendance = async (params: { scxid: string }) => {
  return request.get({
    url: API.countAttendance,
    params
  });
};
