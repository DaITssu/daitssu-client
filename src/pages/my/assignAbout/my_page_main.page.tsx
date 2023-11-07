import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageAssignList from '@/components/myPage/assignesAbout/my_assign_comps/my_page_main';

export default function Home() {
  return (
    <>
      <Header />
      <MypageAssignList 
        ass_link="./my_page_my_subj"
      />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;