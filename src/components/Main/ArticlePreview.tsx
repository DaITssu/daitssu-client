import Link from 'next/link';
import { Article } from '@/types/article';

interface ArticlePreviewProps {
  article: Article;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  return (
    <div className="article-preview" key={article.slug}>
      <div className="article-meta">
        <Link href="profile.html">
          <img src={article.author.image} alt="Author Image" />
        </Link>
        <div className="info">
          <Link href="">{article.author.username}</Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((res, index) => (
            <li
              key={index}
              className="tag-default tag-pill tag-outline ng-binding ng-scope"
            >
              {res}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
