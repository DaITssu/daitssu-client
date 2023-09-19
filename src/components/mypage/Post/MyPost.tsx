import NavigationBar from '@/components/common/Navbar/NavigationBar';
import * as styles from './Mypost.style';
import MyPostsTab from './Tab/MyPostsTab';
import { useRecoilValue } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';

const MyPost = () => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;

  return (
    <styles.Container>
      <MyPostsTab />
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </styles.Container>
  );
};

export default MyPost;
