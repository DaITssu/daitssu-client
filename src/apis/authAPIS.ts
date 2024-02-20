import axios from 'axios';
import { axiosInstance } from '@/apis/axiosInstance';
import LocalStorage from '@/utils/localStorage';
import { AuthResponse, UserInfoResponse } from '@/types/Auth';
import router from 'next/router';

//토큰 만료 시간 (ms)
const ACCESS_EXPIRY_TIME = 60 * 60 * 1000; // 1시간
const REFRESH_EXPIRY_TIME = 7 * 24 * 60 * 60 * 1000; // 7일

const signInSuccess = (responseData: AuthResponse) => {
  LocalStorage.setItem('accessToken', responseData.data.accessToken.token);
  const refreshToken = LocalStorage.getItem('refreshToken');

  //accessToken 만료 1분전 로그인 연장
  setTimeout(() => {
    refreshAPI(refreshToken || responseData.data.refreshToken.token).catch(
      (error) => {
        console.error(error);
      },
    );
  }, ACCESS_EXPIRY_TIME);
};

const logout = () => {
  LocalStorage.removeItem('accessToken');
  LocalStorage.removeItem('refreshToken');
  LocalStorage.setItem('isLogin', '');
  router.push('/landing');
};

/**
 * 로그인
 * @param studentId 아이디(학번)
 * @param password 비밀번호
 * @returns AuthResponse Promise
 */
export const signInAPI = async (
  studentId: string,
  password: string,
): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post('/auth/sign-in', {
        studentId,
        password,
      })
      .then((response) => {
        LocalStorage.setItem(
          'refreshToken',
          response.data.data.refreshToken.token,
        );
        signInSuccess(response.data as AuthResponse);
        //refresh token 만료시 로그아웃
        setTimeout(logout, REFRESH_EXPIRY_TIME);
        return resolve(response.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return reject(error.response?.data);
        } else {
          return reject(error);
        }
      });
  });
};

/**
 * 회원가입
 * @param nickname: 닉네임
 * @param name: 이름
 * @param departmentId: 학부
 * @param studentId: 학번
 * @param term: 학기
 * @returns
 */
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
    signInSuccess(response.data as AuthResponse);
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

/**
 * 닉네임 중복체크
 * @param nickname: 유저 닉네임
 */
export const checkUserNickname = async (nickname: string) => {
  try {
    const response = await axiosInstance.get(
      `/auth/check-nickname?nickname=${nickname}`,
    );
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.status;
    }
  }
};
