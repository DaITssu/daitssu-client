import axios from 'axios';
import { axiosInstance } from './axiosInstance';

export const getPopularCommunity = async () => {
  try {
    const response = await axiosInstance.get(`/community/article/popular`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getNotice = async () => {
  try {
    const response = await axiosInstance.get(`/notice`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getFunsystem = async () => {
  try {
    const response = await axiosInstance.get(`/funsystem`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
