import { getApi } from '@/utils/api';
import { z } from 'zod';

const BASE_QUERY_KEY = ['test'] as const;

export const api_getPost = getApi('GET', '/posts', {
  needToLogin: false,
  baseUrl: 'https://jsonplaceholder.typicode.com',
  requestInfo: z.object({
    pathParams: z.tuple([z.number().describe('post id')]),
  }),
  getQueryKey: (requestInfo?) =>
    requestInfo
      ? [...BASE_QUERY_KEY, requestInfo.pathParams[0]]
      : [...BASE_QUERY_KEY],
  _resultType: {} as {
    id: number;
    title: string;
    body: string;
    userId: number;
  },
});
