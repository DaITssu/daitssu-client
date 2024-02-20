import axios from 'axios';

//TODO: baseURL 환경변수로 분리

export const axiosInstance = axios.create({
  baseURL: 'https://api.daitssu.com',
  headers: {
    'Content-Type': 'application/json',
  },
  //withCredentials: true, //쿠키 사용시 CORS 허용을 위해 true로
});
