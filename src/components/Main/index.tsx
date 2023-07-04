import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getArticle } from '@/pages/api/getArticle';
import { Article, ArticlesResponse } from '@/types/articleDTO';
import ArticlePreview from './ArticlePreview';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<ArticlesResponse>({
    articles: [],
    articlesCount: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      const data = await getArticle();
      setArticles(data);
      setLoading(true);
    };
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font ng-binding">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link className="nav-link active" href="">
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>
            {loading ? (
              articles.articles.map((article) => (
                <ArticlePreview article={article} key={article.slug} />
              ))
            ) : (
              <div>Loading....</div>
            )}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Link
                  href=""
                  className="tag-default tag-pill ng-binding ng-scope"
                >
                  programming
                </Link>
                <Link
                  href=""
                  className="tag-default tag-pill ng-binding ng-scope"
                >
                  javascript
                </Link>
                <Link
                  href=""
                  className="tag-default tag-pill ng-binding ng-scope"
                >
                  emberjs
                </Link>
                <Link
                  href=""
                  className="tag-default tag-pill ng-binding ng-scope"
                >
                  angularjs
                </Link>
                <Link
                  href=""
                  className="tag-default tag-pill ng-binding ng-scope"
                >
                  react
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
