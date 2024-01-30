import UtilityHeader from '@/components/common/Header/UtilityHeader';
import * as styles from '../Post/Mypost.style';
import MainLayout from '@/pages/layout';
import { useEffect, useState } from 'react';
import { getMyPageComments } from '@/apis/myPageAPIs';
import { useRouter } from 'next/router';
import CommentList from './CommentList';

export interface MPCommentsProps {
  userId: number;
  commentId: number;
  originalCommentId: number | null;
  createdAt: string;
  updatedAt: string;
  content: string;
}

const MyComment = () => {
  const [comments, setComments] = useState<MPCommentsProps[]>([]);
  useEffect(() => {
    const myPageCommentResponse = getMyPageComments();

    myPageCommentResponse.then((res) => {
      setComments(res?.data);
    });
  }, []);
  const [index, setIndex] = useState(1);

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  const menuTab = [{ title: '글' }, { title: '댓글' }];
  const router = useRouter();

  return (
    <styles.Container>
      <UtilityHeader
        child="내 댓글 목록"
        isDeleteBtn={true}
        // TODO: 삭제함수버튼 구현
        // onClickDeleteBtn={}
      />
      <MainLayout>
        <div>
          <styles.TabBox>
            {menuTab.map((element, idx) => (
              <styles.TabFontBox
                key={idx}
                isSelected={idx === index}
                onClick={() => {
                  if (idx === 0) {
                    router.push('/my/post');
                  }
                  selectMenuHandler(idx);
                }}
              >
                {element.title}
              </styles.TabFontBox>
            ))}
          </styles.TabBox>
          <styles.TabContents>
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
          </styles.TabContents>
        </div>
      </MainLayout>
    </styles.Container>
  );
};

export default MyComment;
