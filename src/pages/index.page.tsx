import MainLayout from './layout';
import { useSetRecoilState } from 'recoil';
import { userNavAtom, IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/common/Navbar/Navigation';
import { useEffect } from 'react';
import '../styles/Home.module.css';
import Main from '@/components/main';

const MainPage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };

  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};
export default MainPage;
