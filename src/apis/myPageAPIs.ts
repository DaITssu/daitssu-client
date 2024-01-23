import axios from 'axios';
import { axiosInstance } from './axiosInstance';

export const getMyPageArticles = async () => {
  try {
    const response = await axiosInstance.get(`/myPage/articles`);
    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.log(error.response?.data);
    // }
    return null;
  }
};
