import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LocalStorage from '@/utils/localStorage';

const useCheckLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = Boolean(LocalStorage.getItem('isLogin'));
    if (
      !isLogin &&
      router.pathname !== '/landing' &&
      router.pathname !== '/login'
    ) {
      router.push('/landing');
    }
  }, []);
};

export default useCheckLogin;
