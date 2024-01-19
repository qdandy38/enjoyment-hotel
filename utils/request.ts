import axios from 'axios';

const service = axios.create({
  baseURL: 'https://freyja-skwb.onrender.com',
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

service.interceptors.response.use(response => {
  return response;
});

export default service;
