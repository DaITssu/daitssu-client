import TopTab from '@/components/notice/TopTab';
import { useEffect, useState } from 'react';
import MainLayout from '../layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';

export default function Home() {
  const getNavData = useRecoilState(userNavAtom);
  const setNavData = useSetRecoilState(userNavAtom);
  useState(() => {
    setNavData({
      ...getNavData,
      activeNavType: 'NOTICE',
    });
  });
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
