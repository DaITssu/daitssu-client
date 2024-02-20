import { axiosInstance } from '@/apis/axiosInstance';
import { useEffect } from 'react';
import LocalStorage from '@/utils/localStorage';

export const useAxiosInterceptor = () => {
  //request Header에 accessToken 설정
  const requestInterceptor = axiosInstance.interceptors.request.use(
    async function (config) {
      const access = LocalStorage.getItem('accessToken');
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [requestInterceptor]);
};
