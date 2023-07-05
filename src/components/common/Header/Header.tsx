import React from 'react';
import { atom, useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginHeader from './LoginHeader';
import LogoutHeader from './LogoutHeader';

export const currentRouteAtom = atom('/');
const isLoggedInAtom = atom(false); // add this line

const Header = () => {
  const [isLoggedIn] = useAtom(isLoggedInAtom); // useAtom instead of useRecoilValue
  const [currentRoute, setCurrentRoute] = useAtom(currentRouteAtom);
  const router = useRouter();

  React.useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname, setCurrentRoute]);

  const getLinkClass = (href: string) => {
    return currentRoute === href ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar navbar-light">
      <link rel="stylesheet" href="https://demo.productionready.io/main.css" />
      <div className="container">
        <Link className={`navbar-brand ${getLinkClass('/')}`} href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className={getLinkClass('/')} href="/">
              Home
            </Link>
          </li>
          {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
