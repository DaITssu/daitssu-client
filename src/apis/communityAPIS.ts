import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

export const getCommunityItemAPI = async (
  inquiry: String = '',
  topic: String,
  page: number = 0,
) => {
  try {
    if (topic === 'ALL') {
      const response = await axiosInstance.get(`/community/article`, {
        params: {
          inquiry: String(inquiry),
          page: page,
        },
      });
      return response.data.data.articles;
    } else if (topic == 'POPULAR') {
      const response = await axiosInstance.get(`/community/article/popular`);
      console.log(response.data);
      return response.data.data;
    } else {
      const response = await axiosInstance.get(`/community/article/topic`, {
        params: {
          inquiry: String(inquiry),
          topic: topic,
          page: page,
        },
      });
      return response.data.data.articles;
    }
  } catch (error) {
    return null;
  }
};

export const getCommunityInfoAPI = async (articleID: number) => {
  try {
    const response = await axiosInstance.get(`/community/article/${articleID}`);
    return response.data;
  } catch (error) {
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
    return null;
  }
};

export const postCommunityScrapAPI = async (
  articleID: number,
  isActive: boolean,
) => {
  try {
    const response = await axiosInstance.post(
      `/community/article/${articleID}/scrap?isActive=${isActive}`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const postCommunityLikeAPI = async (articleID: number) => {
  try {
    const response = await axiosInstance.post(
      `/community/article/${articleID}/like`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
export const postCommunityDislikeAPI = async (articleID: number) => {
  try {
    const response = await axiosInstance.post(
      `/community/article/${articleID}/dislike`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const postCommunityCommentAPI = async (
  articleID: number,
  input: string,
) => {
  try {
    const response = await axiosInstance.post(
      `/community/article/${articleID}/comments`,
      {
        content: input,
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
