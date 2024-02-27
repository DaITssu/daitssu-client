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
      } else {
        setIsValid(false);
      }
      return;
    } catch (error) {
      setIsValid(false);
      return;
    }
  };

  return { isValid, fetchUserInfo };
};
