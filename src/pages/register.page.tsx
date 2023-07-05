import Head from 'next/head';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Register from '@/components/register';

export default function LoginPage() {
  return (
    <div id="ng-scope">
      <Head>
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
        <title>realworld</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Register />
      <Footer />
    </div>
  );
}
