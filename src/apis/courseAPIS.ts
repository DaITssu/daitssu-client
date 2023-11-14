import { axiosInstance } from '@/apis/axiosInstance';
import axios from 'axios';

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
