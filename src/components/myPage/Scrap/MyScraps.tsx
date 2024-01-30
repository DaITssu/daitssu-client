import UtilityHeader from '@/components/common/Header/UtilityHeader';
import MainLayout from '@/pages/layout';
import * as styles from './MyScrap.style';
import ScrapList from './ScrapList';
import { useEffect, useState } from 'react';
import { getMyPageScraps } from '@/apis/myPageAPIs';
import { MyPostProps } from '../Post/Tab/MyPostsTab';

const MyScraps = () => {
  const [data, setData] = useState<MyPostProps[]>([]);

  useEffect(() => {
    const myPageScrapsResponse = getMyPageScraps();

    myPageScrapsResponse.then((res) => {
      setData(res?.data);
    });
  }, []);

  return (
    <styles.Container>
      <UtilityHeader
        child="스크랩"
        isDeleteBtn={true}
        // TODO: 삭제함수버튼 구현
        // onClickDeleteBtn={}
      />
      <MainLayout>
        {data?.map((el) => {
          return (
            <ScrapList
              key={el.id}
              id={el.id}
              topic={el.topic}
              title={el.title}
              content={el.content}
              commentSize={el.commentSize}
              createdAt={el.createdAt}
            />
          );
        })}
      </MainLayout>
    </styles.Container>
  );
};

export default MyScraps;
