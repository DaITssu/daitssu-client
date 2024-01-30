import { userNavAtom } from '@/states/userNavAtom';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import * as styles from './layout.style';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import useNavbar from '@/hooks/useNavbar';

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;

  const { renderNavbar } = useNavbar();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const currentPageUrl = window.location.href;
    if (
      currentPageUrl.includes('landing') ||
      currentPageUrl.includes('login')
    ) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, []);

  return (
    <>
      {children || <Outlet />}
      {/* {isShow && <Header />} */}
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} render={renderNavbar} />
      </styles.NavBarWrapper>
    </>
  );
};
export default MainLayout;
