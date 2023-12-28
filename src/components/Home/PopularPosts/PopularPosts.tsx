import Image from 'next/image';
import * as styles from './PopularPosts.styles';
import CommentIcon from '@icons/icon/Icon18/SmallComment.svg';
import { useRouter } from 'next/router';
import RightSmallArrow from '@icons/icon/Arrow/RightSmallArrow.svg';
import { beforeTime } from '@utils/time';

export interface PostDetailProps {
  id: number;
  title: string;
  content: string;
  type: 'info' | 'question' | 'free';
  commentCount: number;
  createdAt: string;
}

const PopularPosts = ({ posts }: { posts: PostDetailProps[] }) => {
  const router = useRouter();
  const handleOnClickMore = () => {
    router.push('/community');
  };
  return (
    <styles.Container>
      <styles.RowSpacer>
        <styles.Title>인기 게시글</styles.Title>
        <styles.MoreButton onClick={handleOnClickMore}>
          더보기{' '}
          <Image
            src={RightSmallArrow}
            width={20}
            height={20}
            alt="오른쪽 화살표"
          />
        </styles.MoreButton>
      </styles.RowSpacer>
      <>
        {posts.map((post) => (
          <PostDetail
            id={post.id}
            title={post.title}
            content={post.content}
            type={post.type}
            commentCount={post.commentCount}
            createdAt={post.createdAt}
            key={post.id}
          />
        ))}
      </>
    </styles.Container>
  );
};

const PostDetail = ({
  id,
  title,
  content,
  type,
  commentCount,
  createdAt,
}: PostDetailProps) => {
  const router = useRouter();

  let typeTrans = '';
  if (type === 'info') {
    typeTrans = '정보';
  } else if (type === 'question') {
    typeTrans = '질문';
  } else {
    typeTrans = '자유';
  }

  function onClick() {
    //TODO 실제 게시글로 이동
    router.push(`/post/${id}`);
  }

  return (
    <styles.PostContainer onClick={onClick}>
      <styles.RowSpacer>
        <styles.Row>
          <styles.PostType>{typeTrans}</styles.PostType>
          <styles.PostTitle>{title}</styles.PostTitle>
        </styles.Row>
        <styles.PostTime>{beforeTime(createdAt)}</styles.PostTime>
      </styles.RowSpacer>
      <styles.RowSpacer>
        <styles.PostContent>{content}</styles.PostContent>
        <styles.Row>
          <Image src={CommentIcon} width={18} height={18} alt="댓글" />
          <styles.PostCommentCount>{commentCount}</styles.PostCommentCount>
        </styles.Row>
      </styles.RowSpacer>
    </styles.PostContainer>
  );
};

export default PopularPosts;
