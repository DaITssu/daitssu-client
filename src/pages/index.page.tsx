import MainLayout from './layout';
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userNavAtom, IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/common/Navbar/Navigation';
import '../styles/Home.module.css';
import Main from '@/components/main';
import LocalStorage from '@/utils/localStorage';
import { useRouter } from 'next/router';

const MainPage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };

  const router = useRouter();

  //로그인 여부
  const isLogin = Boolean(LocalStorage.getItem('isLogin'));

  //mobile height size 설정
  useEffect(() => {
    // 미로그인 상태면 랜딩 페이지로 이동
    if (!isLogin) {
      router.push('/landing');
    }
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
