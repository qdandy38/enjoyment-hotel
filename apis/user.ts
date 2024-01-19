import request from '@/utils/request';

/**
 * @description 登入
 */
export const login = (data: any) =>
  request({
    url: '/api/v1/user/login',
    method: 'post',
    data,
  });
