import { useAtom } from 'jotai';
import Link from 'next/link';
import { currentRouteAtom } from './Header'; // import the atom

const LoginHeader = () => {
  const [currentRoute] = useAtom(currentRouteAtom);

  const getLinkClass = (href: string) => {
    return currentRoute === href ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
      <li className="nav-item">
        <Link className={getLinkClass('/editor')} href="/editor">
          <i className="ion-compose"></i> New Article
        </Link>
      </li>
      <li className="nav-item">
        <Link className={getLinkClass('/settings')} href="/settings">
          <i className="ion-gear-a"></i> Settings
        </Link>
      </li>
    </>
  );
};

export default LoginHeader;
