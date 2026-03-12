export const BASE_URL = 'http://192.168.1.33:1998';
import request from '@/utils/request';

export const API = {
  getPublicKey: '/video/platform/evo-apigw/evo-oauth/1.0.0/oauth/public-key', // 获取公钥
  getToken: '/video/platform/evo-apigw/evo-oauth/1.0.0/oauth/extend/token',    // 获取Token
  refreshToken: '/video/platform/evo-apigw/evo-oauth/1.0.0/oauth/extend/refresh/token', // 保活Token
  StartVideo: '/video/evo-apigw/admin/API/MTS/Video/StartVideo'
};

export const getPublicKey = async () => {
  return request.get({
    url: API.getPublicKey,
  });
};

export const getToken = async (data: any) => {
  return request.post({
    url: API.getToken,
    data
  });
};
