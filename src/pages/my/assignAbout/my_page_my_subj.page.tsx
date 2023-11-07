import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageMyAssign from '@/components/myPage/assignesAbout/my_assign_comps/my_page_my_subj';

export default function Home() {
  return (
    <>
      <Header />
      <MypageMyAssign
          link_assigns="./my_page_my_subj" // 과제 링크
          link_ann="./my_page_my_subj" // 공지사항 링크
          link_att="./my_page_attendance" // 출석 링크  
      />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;