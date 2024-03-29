import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

//Todo : 페이지네이션
export const getNoticeAPI = async (searchKeyword: String = '') => {
  try {
    const response = await axiosInstance.get(`/notice`, {
      params: {
        searchKeyword: String(searchKeyword),
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getNoticeAPIwithCategory = async (
  searchKeyword: String = '',
  category: String,
  page: number = 0,
) => {
  try {
    if (category === 'ALL') {
      const response = await axiosInstance.get(`/notice`, {
        params: {
          searchKeyword: String(searchKeyword),
          page: page,
        },
      });
      return response.data;
    } else {
      const response = await axiosInstance.get(`/notice/category`, {
        params: {
          category: String(category),
          searchKeyword: String(searchKeyword),
          page: page,
        },
      });
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getFunSystemAPIwithCategory = async (
  searchKeyword: String = '',
  category: String,
  page: number = 0,
) => {
  try {
    if (category === 'ALL') {
      const response = await axiosInstance.get(`/funsystem`, {
        params: {
          searchKeyword: String(searchKeyword),
          page: page,
        },
      });
      return response.data;
    } else {
      const response = await axiosInstance.get(`/funsystem/category`, {
        params: {
          category: String(category),
          searchKeyword: String(searchKeyword),
          page: page,
        },
      });
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

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

export const getNoticeInfoCommentAPI = async (noticeId: number) => {
  try {
    const response = await axiosInstance.get(`/notice/${noticeId}/comments`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const postNoticeCommentAPI = async (noticeId: number, input: string) => {
  try {
    const response = await axiosInstance.post(`/notice/${noticeId}/comments`, {
      content: input,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
