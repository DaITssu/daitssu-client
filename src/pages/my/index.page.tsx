import EditProfile from '@/components/myPage/home';
import { useState } from 'react';
import MainLayout from '../layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';

export default function Home() {
  const getNavData = useRecoilState(userNavAtom);
  const setNavData = useSetRecoilState(userNavAtom);
  useState(() => {
    setNavData({
      ...getNavData,
      activeNavType: 'MY_PAGE',
    });
  });

  return (
    <MainLayout>
      <EditProfile />
    </MainLayout>
  );
}
