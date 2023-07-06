import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/models/ArticleDTO';

interface TestProps {
  article: Article;
}

const ArticleComponent = ({ article }: TestProps) => (
  <div className="article-preview">
    <div className="article-meta">
      <Link href="profile.html">
        <Image
          src={
            article.author.image ??
            'https://api.realworld.io/images/demo-avatar.png'
          }
          alt="Author's profile image"
          width={32}
          height={32}
          className="author-img"
        />
      </Link>
      <div className="info">
        <Link href="" className="author">
          {article.author.username}
        </Link>
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
        {article.tagList.map((tag) => (
          <li className="tag-default tag-pill tag-outline" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  </div>
);

export default ArticleComponent;
