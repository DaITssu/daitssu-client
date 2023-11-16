import { axiosInstance } from "@/apis/axiosInstance";
import axios from "axios";

//Todo : 페이지네이션 
export const getNoticeAPI = async (searchKeyword:String="") => {
  try {
    const response = await axiosInstance.get(`/notice`,{
      params : {
        searchKeyword : String(searchKeyword),
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};


export const getNoticeAPIwithCategory = async (searchKeyword:String ="",category :String) => {
  try {
    if(category === "ALL"){
      const response = await axiosInstance.get(`/notice`,{
        params : {
          searchKeyword : String(searchKeyword),
        }
      });
      return response.data;
    }else{
      const response = await axiosInstance.get(`/notice/${category}`,{
        params : {
          searchKeyword : String(searchKeyword),
        }
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

export const getFunSystemAPIwithCategory = async (searchKeyword:String ="",category :String) => {
  try {
    if(category === "ALL"){
      const response = await axiosInstance.get(`/funsystem`,{
        params : {
          searchKeyword : String(searchKeyword),
        }
      });
      return response.data;
    }else{
      const response = await axiosInstance.get(`/funsystem/${category}`,{
        params : {
          searchKeyword : String(searchKeyword),
        }
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