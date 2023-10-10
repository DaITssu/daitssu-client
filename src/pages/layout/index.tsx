import Header from '@/components/common/Header/Header';
import { userNavAtom } from '@/states/userNavAtom';
import { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import * as styles from './layout.style';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import useNavbar from '@/hooks/useNavbar';

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;

  const { renderNavbar } = useNavbar();

  return (
    <>
      {children || <Outlet />}
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} render={renderNavbar} />
      </styles.NavBarWrapper>
    </>
  );
};
export default MainLayout;
