import { useState, useEffect } from 'react';

/*
미로그인시 랜딩페이지에서 스크롤 위치에 따라 하단 네비게이션바를 렌더링 여부를 return하는 hook
 */
const useNavbar = () => {
  const [isLogin, setIsLogin] = useState(false); //TODO: 추후 전역 상태에서 가져옴
  const [renderNavbar, setRenderNavbar] = useState(false);

  function onScroll() {
    if (screen.height * 0.8 < window.scrollY) {
      setRenderNavbar(true);
    } else {
      setRenderNavbar(false);
    }
  }

  useEffect(() => {
    if (!isLogin) {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    } else {
      setRenderNavbar(true);
    }
  }, []);

  return { renderNavbar };
};

export default useNavbar;
