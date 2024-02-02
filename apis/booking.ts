import request from '@/utils/request';

/**
 * @description 取得所有房型
 */
export const getRooms = () =>
  request({
    url: '/api/v1/rooms',
    method: 'get',
  });
