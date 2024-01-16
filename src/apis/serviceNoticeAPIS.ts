import axios from 'axios';
import { axiosInstance } from './axiosInstance';

export const getServiceNoticeAPI = async () => {
  try {
    const response = await axiosInstance.get(`/myPage/service-notice`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error! :', error);
    }
    return null;
  }
};
