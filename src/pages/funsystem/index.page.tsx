import TopTab from '@/components/notice/TopTab';
import MainLayout from '../layout';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const getNavData = useRecoilState(userNavAtom);
  const setNavData = useSetRecoilState(userNavAtom);
  useState(() => {
    setNavData({
      ...getNavData,
      activeNavType: 'NOTICE',
    });
  });
  return (
    <>
      <MainLayout />
      <TopTab type="펀시스템" />
    </>
  );
}
