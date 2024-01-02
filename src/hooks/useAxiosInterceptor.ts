import { axiosInstance } from '@/apis/axiosInstance';
import { refreshAPI } from '@/apis/authAPIS';
import { useRecoilState } from 'recoil';
import { accessTokenAtom, refreshTokenAtom } from '@/states/authAtom';
import { useEffect } from 'react';

export const useAxiosInterceptor = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);

  //request Header에 accessToken 설정
  const requestInterceptor = axiosInstance.interceptors.request.use(
    async function (config) {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { config, response } = error;
      //accessToken 만료
      if (!config._isRetry) {
        if (
          response.status === 401 &&
          response.data.error === 'Unauthorized' &&
          accessToken !== ''
        ) {
          const originalReq = config;
          const response = await refreshAPI(refreshToken);
          console.log(response);
          if (response.status === 200) {
            const newAccessToken = response.data.accessToken.token;
            setAccessToken(newAccessToken);
            const newRefreshToken = response.data.refreshToken.token;
            setRefreshToken(newRefreshToken);
            originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalReq);
          }
          originalReq._isRetry = true;
        }
      }
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
