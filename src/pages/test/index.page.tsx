import Head from 'next/head';
import Test from '@/components/common/Test';
import * as styles from './index.style';
import useTestCount from './useTestCount';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getPost } from '@/apis/test';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import Header from '@/components/common/Header/Header';

import { useEffect } from 'react';
import { getUserAPI } from '@/apis/userAPIS';
import { postCourseVideoAPI } from '@/apis/courseAPIS';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(api_getPost[1]({ pathParams: [1] }), () =>
    api_getPost[0]({ pathParams: [1] }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// 페이지 관련 파일들을 함께 두기(co-locate) 위해, .page.tsx로 끝나는 것만 실제 페이지로 인식하도록 설정해 놓았습니다.
export default function TestPage() {
  const { count, increment, decrement } = useTestCount();
  const { data } = useApiQuery(api_getPost, { pathParams: [1] });

  //api 예제 코드
  useEffect(() => {
    const getResponse = getUserAPI();
    getResponse.then((res) => {
      console.log(res);
    });

    const postResponse = postCourseVideoAPI(1, 'course');
    postResponse.then((res) => {
      //이어서 post 후 원하는 작업 수행
      console.log(res);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="test page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Container>
        <Header />
        <Test label={`${count}`} />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        {data ? (
          <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <p>{data.userId}</p>
          </div>
        ) : null}
      </styles.Container>
    </>
  );
}
