import axios from 'axios';
import store from '@/store';

const service = axios.create({
  baseURL: 'https://freyja-skwb.onrender.com',
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = state.user.token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

service.interceptors.response.use(response => {
  return response;
});

export default service;
