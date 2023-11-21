import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getNoticeInfoAPI = async (noticeId: number) => {
  try {
    const response = await axiosInstance.get(`/notice/page/${noticeId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
