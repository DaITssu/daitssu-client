import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getCommunityItemAPI = async (
  inquiry: String = '',
  category: String,
  page: number = 0,
) => {
  try {
    if (category === 'ALL') {
      const response = await axiosInstance.get(`/community/article`, {
        params: {
          inquiry: String(inquiry),
          page: page,
        },
      });
      return response.data;
    } else {
      const response = await axiosInstance.get(
        `/community/article/topic/${category}`,
        {
          params: {
            inquiry: String(inquiry),
            page: page,
          },
        },
      );
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getCommunityInfoAPI = async (articleID: number) => {
  try {
    const response = await axiosInstance.get(`/community/article/${articleID}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getCommunityInfoCommentAPI = async (articleID: number) => {
  try {
    const response = await axiosInstance.get(
      `/community/article/${articleID}/comments`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
