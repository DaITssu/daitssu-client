import Link from 'next/link';

const Header: React.FC = () => {
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
};

export default Header;
