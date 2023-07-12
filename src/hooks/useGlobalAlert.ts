import { ApiError } from '@/utils/api';
import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const globalApiErrorAtom = atom<ApiError | null>(null);

const useGlobalAlert = () => {
  const [globalApiError, setGlobalApiError] = useAtom(globalApiErrorAtom);

  const alertFromApiError = useCallback(
    (apiError: ApiError) => {
      setGlobalApiError((prev) => {
        // 이미 팝업이 열려 있으면 무시
        if (prev) return prev;
        return apiError;
      });
    },
    [setGlobalApiError],
  );

  const closeGlobalAlert = useCallback(() => {
    setGlobalApiError(null);
  }, [setGlobalApiError]);

  return { globalApiError, alertFromApiError, closeGlobalAlert };
};

export default useGlobalAlert;
