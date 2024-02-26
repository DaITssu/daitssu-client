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

export const getFunsystemInfoCommentAPI = async (funId: number) => {
  try {
    const response = await axiosInstance.get(`/funsystem/${funId}/comments`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const postFunsystemCommentAPI = async (
  funSystemId: number,
  input: string,
) => {
  try {
    const response = await axiosInstance.post(
      `/funsystem/${funSystemId}/comments`,
      {
        content: input,
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
