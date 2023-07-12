import type {
  Api,
  ApiInfo,
  ApiInfoFull,
  ApiRequest,
  ApiRequestInput,
  ApiRequestInputBasic,
} from '@/types/api';

const CommonError: Record<
  number,
  { title: string; message: string; onPopupPress?: () => void }
> = {
  401: {
    title: '오류가 발생했어요',
    message: '로그인이 필요합니다',
    onPopupPress: () => {},
  },
} as const;

interface ClientError {
  status?: number;
  title?: string;
  message?: string;
  fetchUrl: string;
  clientError?: any;
  serverError?: any;
  onPopupPress?: () => void;
}

export class ApiError implements ClientError {
  public status?: number;

  public title: string;

  public message: string;

  public fetchUrl: string;

  public serverError?: any;

  public onPopupPress?: () => void;

  constructor(error: ClientError) {
    this.status = error.status;
    this.title = error.title ?? '오류가 발생했어요';
    this.message = error.message ?? '잠시 후 다시 시도해주세요';
    this.fetchUrl = error.fetchUrl;
    this.serverError = error.serverError;
    this.onPopupPress = error.onPopupPress;
  }
}

const fetchApi = async <Result, Request extends ApiRequest>(
  apiInfo: ApiInfoFull<Result, Request>,
  requestInfo: ApiRequestInput<Request>,
  accessToken?: string,
): Promise<Result> => {
  const baseUrl = apiInfo.baseUrl ?? '여기에 서버 url'; // TODO
  const url = `${baseUrl}${apiInfo.endpoint}`;

  try {
    // zod로 요청 정보 validate
    const parsedRequestInfo = (apiInfo.requestInfo?.parse(requestInfo) ??
      {}) as ApiRequestInputBasic;

    const authorizationHeader = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : undefined;

    const pathString =
      parsedRequestInfo.pathParams?.reduce<string>(
        (prev, cur) => `${prev}/${cur}`,
        '',
      ) ?? '';

    const params = parsedRequestInfo.params ?? {};
    const queryString = Object.keys(params).reduce(
      (prev, cur) =>
        `${prev}${
          params[cur] !== null && params[cur] !== undefined
            ? `&${cur}=${params[cur]}`
            : ''
        }`,
      '',
    );
    const fetchUrl = `${url}${pathString}${
      queryString ? `?${queryString.slice(1)}` : ''
    }`;

    // 로그인이 필수인데 token이 없는 경우 요청을 보내지 않고 바로 에러
    if (!accessToken && apiInfo.needToLogin) {
      throw new ApiError({
        status: 401,
        fetchUrl,
        ...CommonError[401],
      });
    }

    const response = await fetch(fetchUrl, {
      method: apiInfo.method,
      body:
        parsedRequestInfo.body !== undefined
          ? JSON.stringify(parsedRequestInfo.body)
          : undefined,
      headers: {
        'Content-type': 'application/json',
        ...authorizationHeader,
        ...parsedRequestInfo.headers,
      },
    });

    let result;
    try {
      result = await response.json();
    } catch (error) {
      result = null;
    }

    if (response.ok) {
      return result;
    }

    throw new ApiError({
      status: response.status,
      fetchUrl,
      title:
        apiInfo.errorMessages?.[response.status]?.title ??
        CommonError[response.status]?.title,
      message:
        apiInfo.errorMessages?.[response.status]?.message ??
        CommonError[response.status]?.message,
      serverError: result,
      onPopupPress: CommonError[response.status]?.onPopupPress,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    console.error(url, error);

    // `fetchApi`의 모든 에러가 `ApiError`임을 보장
    throw new ApiError({
      fetchUrl: url,
      clientError: error,
    });
  }
};

/**
 * API 호출용 정보를 얻는 함수
 * @param method REST API method
 * @param endpoint 서버 주소를 제외한 endpoint (ex: '/test')
 * @param info `ApiInfo`
 * @returns `Api`
 * @example
 * ```
 * const api_getTest = getApi('GET', '/test', {
 *   needToLogin: false,
 *   requestInfo: z.object({
 *     pathParams: z.tuple([z.string()]),
 *   }),
 *   getQueryKey: (requestInfo?) => ['test', requestInfo?.pathParams[0] ?? ''],
 *   _resultType: {} as { test: string },
 * });
 * ```
 */
export const getApi = <Result, Request extends ApiRequest>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  info: ApiInfo<Result, Request>,
): Api<Result, Request> => {
  const fetcher = async (
    requestInfo: ApiRequestInput<Request>,
    accessToken?: string,
  ) => {
    const response = await fetchApi(
      { method, endpoint, ...info },
      requestInfo,
      accessToken,
    );
    return response;
  };

  return [fetcher, info.getQueryKey] as const;
};
