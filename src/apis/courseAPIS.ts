import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';
import { type } from 'os';

/**
 * 강의 추가하기
 * @param courseId : 강의 번호
 * @param name : 강의 이름
 * @returns
 */
export const postCourseVideoAPI = async (courseId: number, name: string) => {
  try {
    const response = await axiosInstance.post(`/course/video`, {
      courseId,
      name,
    });
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

/**
 * 과목 추가하기
 * @param name
 * @param description
 * @returns
 */
export const postCourseCourseAPI = async (
  name: string,
  description: string,
) => {
  try {
    const response = await axiosInstance.post(`/course/course`, {
      name,
      description,
    });
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const postCourseCalendarAPI = async (
  type: string,
  course: string,
  dueAt: string,
  name: string,
  isCompleted: boolean,
) => {
  try {
    const response = await axiosInstance.post(`/course/calendar`, {
      type,
      course,
      dueAt,
      name,
      isCompleted,
    });
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const postCourseAssignmentAPI = async (
  courseId: number,
  name: string,
) => {
  try {
    const response = await axiosInstance.post(`/course/assignment`, {
      courseId,
      name,
    });
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getCalendarAPI = async (date: string) => {
  try {
    const response = await axiosInstance.get(`/course/calendar/${date}`);
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export const getTodayCalendarAPI = async () => {
  try {
    const response = await axiosInstance.get(`/course/calendar/today`);
    return response.data;
  } catch (error) {
    //에러 출력 - 미사용시 주석처리
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
