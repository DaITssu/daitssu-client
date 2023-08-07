import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import useApi from './useApi';
import type { Api, ApiRequest, ApiRequestInput } from '@/types/api';
import { ApiError } from '@/utils/api';

/**
 * `useMutation` wrapper
 * @param api `Api`
 * @param options `UseMutationOptions & { shouldAlertOnError?: boolean }`
 * @returns `UseMutationResult`
 * @example
 * ```
 * const mutation = useApiMutation(api_postArticle);
 * ```
 */
const useApiMutation = <Result, Request extends ApiRequest, TContext = unknown>(
  api: Api<Result, Request>,
  options?: UseMutationOptions<
    Result,
    ApiError,
    ApiRequestInput<Request>,
    TContext
  > & {
    shouldAlertOnError?: boolean;
  },
) => {
  const { fetchWithToken } = useApi();
  const [, getQueryKey] = api;

  return useMutation({
    mutationKey: getQueryKey(),
    mutationFn: (request: ApiRequestInput<Request>) =>
      fetchWithToken(api, request, {
        shouldAlertOnError: options?.shouldAlertOnError,
      }),
    ...options,
  });
};

export default useApiMutation;
