import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const getServiceNoticeAPI = async () => {
  try {
    const response = await axiosInstance.get(`/mypage/service-notice`,{
      
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error! :', error);
    }
    return null;
  }
};
