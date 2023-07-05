import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomePage from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div id="ng-scope">
      <Head>
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
        <title>realworld</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
