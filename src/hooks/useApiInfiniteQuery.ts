import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import useApi from './useApi';
import type { Api, ApiRequest, ApiRequestInput } from '@/types/api';
import { ApiError } from '@/utils/api';

/**
 * `useInfiniteQuery` wrapper
 * @param api `Api`
 * @param requestInfo page에 따른 API request
 * @param initialPage 초기 페이지 (보통 0 아니면 1)
 * @param getNextPageParam 다음 페이지를 얻는 함수
 * @param options `UseInfiniteQueryOptions & { shouldAlertOnError?: boolean }`
 * @returns `UseInfiniteQueryResult`
 * @example
 * ```
 * const { data, hasNextPage } = useApiInfiniteQuery(
 *   api_getTests,
 *   (page) => ({ pathParams: [page] }),
 *   0,
 *   (lastPage) => lastPage.page + 1,
 * );
 * ```
 */
const useApiInfiniteQuery = <
  Result,
  Request extends ApiRequest,
  TData = Result,
>(
  api: Api<Result, Request>,
  requestInfo: (page: number) => ApiRequestInput<Request>,
  initialPage: number,
  getNextPageParam: (
    lastPage: Result,
    allPages: Result[],
  ) => number | undefined,
  options?: UseInfiniteQueryOptions<
    Result,
    ApiError,
    TData,
    Result,
    readonly any[]
  > & { shouldAlertOnError?: boolean },
) => {
  const { fetchWithToken } = useApi();
  const [, getQueryKey] = api;

  return useInfiniteQuery({
    queryKey: getQueryKey(requestInfo(0)),
    queryFn: ({ pageParam = initialPage }) =>
      fetchWithToken(api, requestInfo(pageParam), {
        shouldAlertOnError: options?.shouldAlertOnError,
      }),
    getNextPageParam,
    ...options,
  });
};

export default useApiInfiniteQuery;
