import MainLayout from './layout';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userNavAtom, IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/common/Navbar/Navigation';
import '../styles/Home.module.css';
import Main from '@/components/main';

const MainPage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };

  //mobile height size 설정
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};
export default MainPage;
