import Header from '@/components/common/Header/Header';
import { userNavAtom } from '@/states/userNavAtom';
import { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import * as styles from './layout.style';
import NavigationBar from '@/components/common/Navbar/NavigationBar';

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;

  return (
    <>
      <Header />
      {children || <Outlet />}
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};
export default MainLayout;
