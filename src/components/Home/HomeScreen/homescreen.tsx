import * as styles from './homescreen.styles';
import NoticeFunSystem, {
  SummaryText,
} from '@/components/Home/NoticeFunSystem/NoticeFunSystem';
import PopularPosts, {
  PostDetailProps,
} from '@/components/Home/PopularPosts/PopularPosts';
import { COLORS } from '@/styles/constants/colors';

interface HomeProps {
  popularPosts: PostDetailProps[];
  notice: SummaryText[];
  funsystem: SummaryText[];
}

export const HomeScreen = (props: HomeProps) => {
  return (
    <>
      <PopularPosts posts={props.popularPosts} />
      <NoticeFunSystem title="공지사항" summaries={props.notice} />
      <NoticeFunSystem
        title="펀시스템"
        summaries={props.funsystem}
        color={COLORS.grayscale.Gray5}
      />
    </>
  );
};

export default HomeScreen;
