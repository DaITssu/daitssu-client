import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getUserAPI = async () => {
  try {
    const response = await axiosInstance.get(`/user`);
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

/**
 * 유저 삭제
 */
export const withdrawlAPI = async () => {
  try {
    const response = await axiosInstance.patch('/user');
    return response.status;
  } catch (error) {
    return 500;
  }
};
