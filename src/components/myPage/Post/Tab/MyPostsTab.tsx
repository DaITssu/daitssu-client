import { useEffect, useState } from 'react';
import * as styles from './MyPostsTab.style';
import ScrapList from '../../Scrap/ScrapList';
import MyComment from '../MyComment';
import { getMyPageArticles } from '@/apis/myPageAPIs';

interface MyPost {
  id: number;
  topic: string;
  title: string;
  content: string;
  createdAt: string;
  commentSize: number;
}

const MyPostsTab = () => {
  const [articles, setArticles] = useState<MyPost[]>([]);
  useEffect(() => {
    const myPageArticleResponse = getMyPageArticles();

    myPageArticleResponse.then((res) => {
      setArticles(res.data);
    });
  });

  const data = [
    {
      title: '글',
      contents: (
        <styles.PostContianer>
          {articles?.map((el) => {
            return (
              <ScrapList
                key={el.id}
                id={el.id}
                topic={el.topic}
                title={el.title}
                content={el.content}
                createdAt={el.createdAt}
                commentSize={el.commentSize}
              />
            );
          })}
        </styles.PostContianer>
      ),
    },
    {
      title: '댓글',
      contents: (
        <styles.PostContianer>
          <MyComment />
          <MyComment />
          <MyComment />
          <MyComment />
        </styles.PostContianer>
      ),
    },
  ];
  const [index, setIndex] = useState(0);

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  return (
    <div>
      <styles.TabBox>
        {data.map((element, idx) => (
          <styles.TabFontBox
            key={idx}
            isSelected={idx === index}
            onClick={() => selectMenuHandler(idx)}
          >
            {element.title}
          </styles.TabFontBox>
        ))}
      </styles.TabBox>
      <styles.TabContents>{data[index].contents}</styles.TabContents>
    </div>
  );
};

export default MyPostsTab;
