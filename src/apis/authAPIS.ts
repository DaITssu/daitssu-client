import axios from 'axios';
import { axiosInstance } from '@/apis/axiosInstance';
import { AuthResponse, UserInfoResponse } from '@/types/Auth';

/**
 * 로그인
 * @param studentId: 아이디(학번)
 * @param password: 비밀번호
 */
export const signInAPI = async (studentId: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/sign-in', {
      studentId,
      password,
    });
    return response.data as AuthResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //console.log(error.response?.data);
      return error.response?.data as AuthResponse;
    }
  }
};

export const signUpAPI = async (
  nickname: string,
  name: string,
  departmentId: number,
  studentId: string,
  term: number,
) => {
  try {
    const response = await axiosInstance.post('/auth/sign-up', {
      nickname,
      name,
      departmentId,
      studentId,
      term,
    });
    return response.data as AuthResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //console.log(error.response?.data);
      return error.response?.data as AuthResponse;
    }
  }
};

/**
 * 토큰 리프레쉬
 * @param resfreshToken: 리프레쉬 토큰
 */
export const refreshAPI = async (refreshToken: string) => {
  try {
    const response = await axiosInstance.post('/auth/refresh', {
      refreshToken: refreshToken,
    });
    return response.data as AuthResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //console.log(error.response?.data);
      return error.response?.data;
    }
  }
};

/**
 * 유저 정보 조회 - 회원가입시
 * @param studentId: 아이디(학번)
 * @param password: 비밀번호
 */
export const getUserInfoAPI = async (studentId: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/info', {
      studentId,
      password,
    });
    return response.data as UserInfoResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //console.log(error.response?.data);
      return error.response?.data;
    }
  }
};
