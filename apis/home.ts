import request from '@/utils/request';

/**
 * @description 取得所有最新消息
 */
export const getNewsList = () =>
  request({
    url: '/api/v1/home/news',
    method: 'get',
  });

/**
 * @description 取得所有美味佳餚
 */
export const getCulinaryList = () =>
  request({
    url: '/api/v1/home/culinary',
    method: 'get',
  });
