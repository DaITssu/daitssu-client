import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <p className="navbar-brand">conduit</p>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <Link href="/">
              <p className="nav-link active">Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <p className="nav-link">Sign in</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <p className="nav-link">Sign up</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
