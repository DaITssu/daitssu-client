import { useEffect, useState } from 'react';
import * as styles from './MyPostsTab.style';
import ScrapList from '../../Scrap/ScrapList';
import MyComment from '../MyComment';
import { getMyPageArticles, getMyPageComments } from '@/apis/myPageAPIs';

export interface MyPostProps {
  id: number;
  topic: string;
  title: string;
  content: string;
  createdAt: string;
  commentSize: number;
}

export interface MPCommentsProps {
  userId: number;
  commentId: number;
  originalCommentId: number | null;
  createdAt: string;
  updatedAt: string;
  content: string;
}

const MyPostsTab = () => {
  const [articles, setArticles] = useState<MyPostProps[]>([]);
  const [comments, setComments] = useState<MPCommentsProps[]>([]);
  useEffect(() => {
    const myPageArticleResponse = getMyPageArticles();

    myPageArticleResponse.then((res) => {
      setArticles(res?.data);
    });

    const myPageCommentResponse = getMyPageComments();

    myPageCommentResponse.then((res) => {
      setComments(res?.data);
    });
  }, []);

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
          {comments?.map((el) => {
            return (
              <MyComment
                key={el.commentId}
                commentId={el.commentId}
                userId={el.userId}
                content={el.content}
                originalCommentId={el.originalCommentId}
                createdAt={el.createdAt}
                updatedAt={el.updatedAt}
              />
            );
          })}
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
