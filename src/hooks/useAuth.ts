import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const authTokenAtom = atom<{ accessToken: string } | null>(null);
const KEY = 'auth-token';

/**
 * access token 등 인증 관련 정보를 사용하는 custom hook
 */
const useAuth = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const isLogined = authToken?.accessToken !== undefined;

  const updateAuthToken = useCallback(
    (accessToken: string) => {
      setAuthToken((prev) => {
        const newData = { ...prev, accessToken };
        localStorage.setItem(KEY, JSON.stringify(newData));
        return newData;
      });
    },
    [setAuthToken],
  );

  const clearAuthToken = useCallback(() => {
    localStorage.removeItem(KEY);
    setAuthToken(null);
  }, [setAuthToken]);

  const restoreAuthTokenFromStorage = useCallback(() => {
    const storedAuthToken = localStorage.getItem(KEY);
    if (storedAuthToken !== null) {
      const newAuthToken = JSON.parse(storedAuthToken);
      if (newAuthToken.accessToken) {
        setAuthToken({ accessToken: newAuthToken.accessToken });
      } else {
        clearAuthToken();
      }
    }
  }, [setAuthToken, clearAuthToken]);

  return {
    authToken,
    restoreAuthTokenFromStorage,
    updateAuthToken,
    clearAuthToken,
    isLogined,
  };
};

/**
 * 로그아웃 함수를 반환하는 custom hook
 * - 로그아웃 시 반드시 활용해야 한다!
 * @returns
 */
export const useLogout = () => {
  const { clearAuthToken } = useAuth();
  const queryClient = useQueryClient();

  const logout = useCallback(() => {
    clearAuthToken();
    queryClient.clear();
  }, [clearAuthToken, queryClient]);

  return logout;
};

export default useAuth;
