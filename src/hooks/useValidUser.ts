import { getUserInfoAPI } from '@/apis/authAPIS';
import { useState } from 'react';

export const useValidUser = (
  studentId: number | undefined,
  password: string,
) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const fetchUserInfo = async () => {
    try {
      const response = await getUserInfoAPI(String(studentId), password);
      if (response.code === 0) {
        setIsValid(true);
        return true;
      } else {
        setIsValid(false);
        return false;
      }
    } catch (error) {
      setIsValid(false);
      return false;
    }
  };

  return { isValid, fetchUserInfo };
};
