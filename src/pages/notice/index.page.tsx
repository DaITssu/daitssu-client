import TopTab from '@/components/notice/TopTab';
import { useEffect } from 'react';
import MainLayout from '../layout';

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
      <TopTab type="공지사항" />
    </>
  );
}
