import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '@/states/authAtom';

//TODO: baseURL 환경변수로 분리
export const axiosInstance = axios.create({
  baseURL: 'https://api.daitssu.com',
  headers: {
    'Content-Type': 'application/json',
  },
  //withCredentials: true, //쿠키 사용시 CORS 허용을 위해 true로
});

//request Header에 accessToken 설정
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = useRecoilValue(accessTokenAtom);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
