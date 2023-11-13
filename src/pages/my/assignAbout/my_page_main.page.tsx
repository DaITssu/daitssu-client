import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageAssignList from '@/components/myPage/assignesAbout/my_assign_comps/my_page_main';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';

export default function Home() {
  return (
    <>
      <Header />
      <MypageAssignList 
        ass_link="/my/assignAbout/my_page_my_subj"
        width={390}
      />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;