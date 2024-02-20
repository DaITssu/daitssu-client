import NoticeFunSystem, {
  SummaryText,
} from '../Home/NoticeFunSystem/NoticeFunSystem';
import PopularPosts, {
  PostDetailProps,
} from '../Home/PopularPosts/PopularPosts';
import { useEffect, useState } from 'react';
import { getFunsystem, getNotice, getPopularCommunity } from '@/apis/mainAPIs';

const Main = () => {
  // load datas
  const [posts, setPosts] = useState<PostDetailProps[]>([]);
  const [noticeList, setNoticeList] = useState<SummaryText[]>([]);
  const [funSystemList, setFunSystemList] = useState<SummaryText[]>([]);

  useEffect(() => {
    const popularArticleResponse = getPopularCommunity();
    const noticeResponse = getNotice();
    const funSystemResponse = getFunsystem();

    popularArticleResponse.then((data) => {
      const result: PostDetailProps[] = data?.data;
      if (result?.length > 3) {
        setPosts(result.slice(0, 3));
      } else {
        setPosts(result);
      }
    });

    noticeResponse.then((data) => {
      const result: SummaryText[] = data?.data.notices;
      if (result?.length > 3) {
        setNoticeList(result.slice(0, 3));
      } else {
        setNoticeList(result);
      }
    });

    funSystemResponse.then((data) => {
      const result: SummaryText[] = data?.data.funSystems;
      if (result?.length > 3) {
        setFunSystemList(result.slice(0, 3));
      } else {
        setFunSystemList(result);
      }
    });
  }, []);

  return (
    <>
      <PopularPosts posts={posts} />
      <NoticeFunSystem title="공지사항" summaries={noticeList} />
      <NoticeFunSystem title="펀시스템" summaries={funSystemList} />
    </>
  );
};
export default Main;
