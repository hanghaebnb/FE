import axios from 'axios';
import { Cookies } from 'react-cookie';

export const instance = axios.create({
  baseURL: 'http://54.180.86.147:80',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const baseURL = axios.create({
  baseURL: 'http://54.180.86.147:80',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  config.headers.Authorization = `${token}`;
  return config;
});
