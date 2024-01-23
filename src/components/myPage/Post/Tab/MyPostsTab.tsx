import { useEffect, useState } from 'react';
import * as styles from './MyPostsTab.style';
import ScrapList from '../../Scrap/ScrapList';
import { getMyPageArticles, getMyPageComments } from '@/apis/myPageAPIs';
import { MyPostProps } from '../MyPost';
import CommentList from '../../Comment/CommentList';
import { MPCommentsProps } from '../../Comment/MyComment';

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
              <CommentList
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
