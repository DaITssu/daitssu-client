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
      setPosts(data.data);
    });

    noticeResponse.then((data) => {
      setNoticeList(data.data.content);
    });

    funSystemResponse.then((data) => {
      setFunSystemList(data.data.content);
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
