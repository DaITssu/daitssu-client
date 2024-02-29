import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import Header from '@/components/common/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"
            />
            <title>다잇슈 - 숭실대학교 학생을 위한 모든 것</title>
          </Head>
          <Header />
          <Component {...pageProps} />
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
