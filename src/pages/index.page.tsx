import MainLayout from './layout';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userNavAtom, IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/common/Navbar/Navigation';
import '../styles/Home.module.css';
import Main from '@/components/main';
import Landing from '@/components/landing';

const MainPage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };

  //TODO: 추후 전역 상태로 관리
  const [isLogin, setIsLogin] = useState<boolean>(false);

  //mobile height size 설정
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  if (isLogin) {
    return (
      <MainLayout>
        <Main />
      </MainLayout>
    );
  } else {
    return (
      <>
        <Landing />
        <MainLayout>
          <Main />
        </MainLayout>
      </>
    );
  }
};
export default MainPage;
