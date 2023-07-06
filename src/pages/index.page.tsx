import { Inter } from 'next/font/google';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import ArticleComponent from '@/components/article';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
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

              <ArticleComponent
                article={{
                  slug: 'how-to-train-your-dragon',
                  title: 'How to train your dragon',
                  description: 'Ever wonder how?',
                  body: 'It takes a Jacobian',
                  tagList: ['dragons', 'training'],
                  createdAt: '2016-02-18T03:22:56.637Z',
                  updatedAt: '2016-02-18T03:48:35.824Z',
                  favorited: false,
                  favoritesCount: 10,
                  author: {
                    username: 'jake',
                    bio: 'I work at statefarm',
                    image: 'https://api.realworld.io/images/demo-avatar.png',
                    following: false,
                  },
                }}
              />
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <Link href="" className="tag-pill tag-default">
                    programming
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    javascript
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    emberjs
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    angularjs
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    react
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    mean
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    node
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    rails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
