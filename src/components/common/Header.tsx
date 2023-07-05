import Link from 'next/link';
import { useAtom } from 'jotai';
import { userAtom } from '@/states/userAtom';
import { useEffect } from 'react';

const Header: React.FC = () => {
  const [user, setUser] = useAtom(userAtom);
  if (user) {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="index.html">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">
                <i className="ion-compose"></i>&nbsp;New Article{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">
                <i className="ion-gear-a"></i>&nbsp;Settings{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">
                <img src={user.image} className="user-pic" />
                {user.username}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Header;
