import * as styles from './Header.style';
import SearchIcon from '@icons/icon/header/search.svg';
import AlarmIcon from '@icons/icon/header/alarm.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NoticeFunSystemTab from '@/components/Home/NoticeFunSystemTab/NoticeFunSystemTab';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { loginAtom } from '@/states/authAtom';
import { useAxiosInterceptor } from '@/hooks/useAxiosInterceptor';
import LocalStorage from '@/utils/localStorage';

const Header = () => {
  useAxiosInterceptor();
  const router = useRouter();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const isLogin = Boolean(LocalStorage.getItem('isLogin'));

  const handleSearchIconClick = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleAlarmIconClick = () => {
    router.push('/alarm');
  };

  useEffect(() => {
    const path = router.pathname;
    if (['/login', '/landing'].includes(path)) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    //첫 랜딩 페이지 & 미로그인시 헤더 안보이게
    if (path == '/' && !isLogin) {
      setIsHeaderVisible(false);
    }
  }, [router.pathname]);

  return (
    <>
      {isHeaderVisible && (
        <>
          <styles.Conatiner>
            <styles.LogoText onClick={handleLogoClick}>DAITSSU</styles.LogoText>
            <styles.IconContainer>
              <Image
                src={SearchIcon}
                height={24}
                width={24}
                alt="search"
                onClick={handleSearchIconClick}
              />
              {/* 알림 기능 완성까지 보류 */}
              {/* <Image
                src={AlarmIcon}
                height={24}
                width={24}
                alt="alarm"
                onClick={handleAlarmIconClick}
              /> */}
            </styles.IconContainer>
          </styles.Conatiner>
          {isSearchVisible && <NoticeFunSystemTab />}
        </>
      )}
    </>
  );
};
export default Header;
