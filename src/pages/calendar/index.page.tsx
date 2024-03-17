import { userNavAtom } from '@/states/userNavAtom';
import CalendarScreen from '@/components/Calendar/CalendarScreen';
import MainLayout from '../layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { use, useState } from 'react';

export default function Calendar() {
  const getNavData = useRecoilState(userNavAtom);
  const setNavData = useSetRecoilState(userNavAtom);

  useState(() => {
    setNavData({
      ...getNavData,
      activeNavType: 'CALENDAR',
    });
  });

  return (
    <MainLayout>
      <CalendarScreen />
    </MainLayout>
  );
}
