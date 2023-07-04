import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link href="profile.html">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt="Author Image"
                  />
                </Link>
                <div className="info">
                  <Link href="">Eric Simons</Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <Link href="">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </Link>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link href="profile.html">
                  <img
                    src="http://i.imgur.com/N4VcUeJ.jpg"
                    alt="Author Image"
                  />
                </Link>
                <div className="info">
                  <Link href="">Albert Pai</Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <Link href="">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </Link>
            </div>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Link href="">programming</Link>
                <Link href="">javascript</Link>
                <Link href="">emberjs</Link>
                <Link href="">angularjs</Link>
                <Link href="">react</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
