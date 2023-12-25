import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const api = axios.create({
  baseURL: __API__,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async config => config,
  error => {
    enqueueSnackbar(error, {
      variant: 'error',
    });
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  config => {
    const resData = config.data as Iresponse<unknown>;
    if (resData.error) localStorage.clear();

    return config;
  },
  async error => {
    enqueueSnackbar('Что-то пошло не так, попробуйте перезагрузить страницу', {
      variant: 'error',
    });
    localStorage.clear();
    return Promise.reject(error);
  },
);

export const $api = api;
