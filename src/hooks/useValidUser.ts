import { getUserInfoAPI } from '@/apis/authAPIS';
import { useState } from 'react';

export const useValidUser = (
  studentId: number | undefined,
  password: string,
) => {
  const fetchUserInfo = async () => {
    try {
      const response = await getUserInfoAPI(String(studentId), password);
      if (response.code === 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return { fetchUserInfo };
};
