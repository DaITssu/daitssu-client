import { useAtom } from 'jotai';
import Link from 'next/link';
import { currentRouteAtom } from './Header'; // import the atom

const LogoutHeader = () => {
  const [currentRoute] = useAtom(currentRouteAtom);

  const getLinkClass = (href: string) => {
    return currentRoute === href ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
      <li className="nav-item">
        <Link className={getLinkClass('/login')} href="/login">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link className={getLinkClass('/register')} href="/register">
          Sign up
        </Link>
      </li>
    </>
  );
};

export default LogoutHeader;
