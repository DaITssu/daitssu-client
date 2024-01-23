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

export const getMyPageComments = async () => {
  try {
    const response = await axiosInstance.get(`/myPage/comments`);
    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.log(error.response?.data);
    // }
    return null;
  }
};

export const getMyPageScraps = async () => {
  try {
    const response = await axiosInstance.get(`/myPage/scraps`);
    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.log(error.response?.data);
    // }
    return null;
  }
};
