import CommunityList from '@/components/community/list/CommunityList';
import MainLayout from '../layout';
import { useState } from 'react';
import { userNavAtom } from '@/states/userNavAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Home() {
  const getNavData = useRecoilState(userNavAtom);
  const setNavData = useSetRecoilState(userNavAtom);
  useState(() => {
    setNavData({
      ...getNavData,
      activeNavType: 'COMMUNITY',
    });
  });
  return (
    <MainLayout>
      <CommunityList isButtonVisible={true} search="" />
    </MainLayout>
  );
}
