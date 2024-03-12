import TopTab from '@/components/notice/TopTab';
import MainLayout from '../layout';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <>
      <MainLayout />
      <TopTab type="펀시스템" />
    </>
  );
}
