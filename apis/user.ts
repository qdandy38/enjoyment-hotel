import request from '@/utils/request';

/**
 * @description 登入
 */
export const login = (data: Record<string, any>) =>
  request({
    url: '/api/v1/user/login',
    method: 'post',
    data,
  });

/**
 * @description 註冊
 */
export const register = (data: Record<string, any>) =>
  request({
    url: '/api/v1/user/signup',
    method: 'post',
    data,
  });

/**
 * @description 檢查是否登入
 */
export const checkUser = () =>
  request({
    url: '/api/v1/user/check',
    method: 'get',
  });

/**
 * @description 取得userInfo
 */
export const getUser = () =>
  request({
    url: '/api/v1/user/',
    method: 'get',
  });
