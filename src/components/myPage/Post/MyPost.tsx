import UtilityHeader from '@/components/common/Header/UtilityHeader';
import * as styles from './Mypost.style';
import MainLayout from '@/pages/layout';
import { useEffect, useState } from 'react';
import { getMyPageArticles } from '@/apis/myPageAPIs';
import ScrapList from '../Scrap/ScrapList';
import { useRouter } from 'next/router';

export interface MyPostProps {
  id: number;
  topic: string;
  title: string;
  content: string;
  createdAt: string;
  commentSize: number;
}

const MyPost = () => {
  const [articles, setArticles] = useState<MyPostProps[]>([]);
  useEffect(() => {
    const myPageArticleResponse = getMyPageArticles();

    myPageArticleResponse.then((res) => {
      setArticles(res?.data);
    });
  }, []);
  const [index, setIndex] = useState(0);

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  const menuTab = [{ title: '글' }, { title: '댓글' }];
  const router = useRouter();

  return (
    <styles.Container>
      <UtilityHeader
        child="내 글 목록"
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
                  if (idx === 1) {
                    router.push('/my/comment');
                  }
                  selectMenuHandler(idx);
                }}
              >
                {element.title}
              </styles.TabFontBox>
            ))}
          </styles.TabBox>
          <styles.TabContents
            style={{ height: '70%', backgroundColor: 'white' }}
          >
            <styles.PostContianer
              style={{ height: '100%', backgroundColor: 'white' }}
            >
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
          </styles.TabContents>
        </div>
      </MainLayout>
    </styles.Container>
  );
};

export default MyPost;
