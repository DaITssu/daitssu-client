import HomeScreen from '@/components/Home/HomeScreen';
import { SummaryText } from '@/components/Home/NoticeFunSystem/NoticeFunSystem';
import { PostDetailProps } from '@/components/Home/PopularPosts/PopularPosts';

export default function Home() {
  const posts: PostDetailProps[] = [];
  const notice: SummaryText[] = [];
  const funsystem: SummaryText[] = [];
  return (
    <HomeScreen popularPosts={posts} notice={notice} funsystem={funsystem} />
  );
}
