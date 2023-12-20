import axios from 'axios';
import { axiosInstance } from '@/apis/axiosInstance';
import { AuthResponse } from '@/types/Auth';

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
