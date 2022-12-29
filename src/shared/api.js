// axios instance
import axios from 'axios';

const instance = axios.create({
  baseURL: ` http://52.78.82.46:8080/api/`,
  // Bearer: ``,
  // validateStatus: (status) => {
  //   return status < 500
  // }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers[''] = `${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return error;
  },
);

const resInterceptor = (response) => {
  return response;
};

const errorInterceptor = (error) => {
  // if (error.response.status === 401) {
  // }
  return Promise.reject(error);
};

instance.interceptors.response.use(resInterceptor, errorInterceptor);

export default instance;
