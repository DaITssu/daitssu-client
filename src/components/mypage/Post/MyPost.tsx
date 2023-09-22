import * as styles from './Mypost.style';
import MyPostsTab from './Tab/MyPostsTab';
import MainLayout from '@/pages/layout';

const MyPost = () => {
  return (
    <styles.Container>
      <MainLayout>
        <MyPostsTab />
      </MainLayout>
    </styles.Container>
  );
};

export default MyPost;
