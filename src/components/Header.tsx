import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/*<!-- Add "active" class when you're on that page" -->*/}
            <a className="nav-link active" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-compose"></i>&nbsp;New Article{' '}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a"></i>&nbsp;Settings{' '}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <img src="" className="user-pic" />
              Eric Simons
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
