import Head from 'next/head';
import Test from '@/components/common/Test';
import * as styles from './index.style';
import useTestCount from './useTestCount';

// 페이지 관련 파일들을 함께 두기(co-locate) 위해, .page.tsx로 끝나는 것만 실제 페이지로 인식하도록 설정해 놓았습니다.
export default function TestPage() {
  const { count, increment, decrement } = useTestCount();

  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="test page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Container>
        <Test label={`${count}`} />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </styles.Container>
    </>
  );
}
