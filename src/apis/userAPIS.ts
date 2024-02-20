import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getUserAPI = async (userId: number) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
