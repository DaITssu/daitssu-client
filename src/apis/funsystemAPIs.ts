import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getFunsystemInfoAPI = async (funId: number) => {
  try {
    const response = await axiosInstance.get(`/funsystem/page/${funId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
