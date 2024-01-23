import UtilityHeader from '@/components/common/Header/UtilityHeader';
import * as styles from './Mypost.style';
import MyPostsTab from './Tab/MyPostsTab';
import MainLayout from '@/pages/layout';

const MyPost = () => {
  return (
    <styles.Container>
      <UtilityHeader
        child="내 글 목록"
        isDeleteBtn={true}
        // TODO: 삭제함수버튼 구현
        // onClickDeleteBtn={}
      />

      <MainLayout>
        <MyPostsTab />
      </MainLayout>
    </styles.Container>
  );
};

export default MyPost;
