import React, { useRef } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Article {
  articles: [
    {
      slug: string;
      title: string;
      description: string;
      body: string;
      tagList: [];
      createdAt: string;
      updatedAt: string;
      favorited: boolean;
      favoritesCount: number;
      author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
      };
    },
  ];
}

interface Articles {
  articles: [];
}

const MainHome = () => {
  // const [articles, setArticles] = useState<Articles>({
  //   slug: '',
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: [],
  //   createdAt: '',
  //   updatedAt: '',
  //   favorited: false,
  //   favoritesCount: 0,
  //   author: {
  //     username: '',
  //     bio: '',
  //     image: '',
  //     following: false,
  //   },
  // });
  const [articles, setArticles] = useState<Article>();

  const arrayArticle = useRef<Article>();
  useEffect(() => {
    axios.get('https://api.realworld.io/api/articles').then((res) => {
      console.log('res', res.data.articles);
      setArticles(res.data);
    });
  }, []);
  if (articles !== undefined) {
    if (articles.articles !== undefined)
      console.log('articles', articles.articles.length);
  }
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

            {articles === undefined
              ? ''
              : articles.articles !== undefined
              ? articles.articles.map((el: any, idx) => {
                  return (
                    <div className="article-preview" key={idx}>
                      <div className="article-meta">
                        <a href="profile.html">
                          <img src={el.author.image} />
                        </a>
                        <div className="info">
                          <a href="" className="author">
                            {el.author.username}
                          </a>
                          <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                          <i className="ion-heart"></i> {el.favoriteCount}
                        </button>
                      </div>
                      <a href="" className="preview-link">
                        <h1>{el.title}</h1>
                        <p>{el.description}</p>
                        <span>Read more...</span>
                      </a>
                    </div>
                  );
                })
              : ''}
          </div>
          {/** popular tags */}
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
