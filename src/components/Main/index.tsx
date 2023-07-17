import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getArticles } from '@/api/getArticles';
import { Article, ArticlesResponse } from '@/types/article';
import ArticlePreview from './ArticlePreview';
import Pagination from './pagenations';
import { useAtom } from 'jotai';
import { userAtom } from '@/states/userAtom';

const TAGS: { label: string; url: string }[] = [
  {
    label: 'programming',
    url: '',
  },
  {
    label: 'javascript',
    url: '',
  },
  {
    label: 'emberjs',
    url: '',
  },
  {
    label: 'angularjs',
    url: '',
  },
  {
    label: 'react',
    url: '',
  },
];

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState<ArticlesResponse>({
    articles: [],
    articlesCount: 0,
  });

  const [user, setUser] = useAtom(userAtom);

  const pageSize = 10;
  const maxPageLength = Math.ceil(articles.articlesCount / pageSize);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      const data = await getArticles(0);
      setArticles(data);
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      {user ? null : (
        <div className="banner">
          <div className="container">
            <h1 className="logo-font ng-binding">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
      )}

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
                {TAGS.map((tagItem) => (
                  <Link
                    key={tagItem.label}
                    href={tagItem.url}
                    className="tag-default tag-pill ng-binding ng-scope"
                  >
                    {tagItem.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={maxPageLength}
          onPageChange={async (res) => {
            const data = await getArticles(res);
            setArticles(data);
            setCurrentPage(res);
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
