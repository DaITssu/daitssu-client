import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageAssignList from '@/components/myPage/assignesAbout/my_assign_comps/my_page_assign_list';

export default function Home() {
  return (
    <>
      <Header />
      <MypageAssignList />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;