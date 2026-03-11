export const BASE_URL = 'http://192.168.1.32:1998';

export const API = {
  getPublicKey: '/platform/evo-apigw/evo-oauth/1.0.0/oauth/public-key', // 获取公钥
  getToken: '/platform/evo-apigw/evo-oauth/1.0.0/oauth/extend/token',    // 获取Token
  refreshToken: '/platform/evo-apigw/evo-oauth/1.0.0/oauth/extend/refresh/token' // 保活Token
};
