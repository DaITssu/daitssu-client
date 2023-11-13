import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageMyAssign from '@/components/myPage/assignesAbout/my_assign_comps/my_page_my_subj';

import { useRouter } from 'next/router';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';

export default function Home() {
  const router = useRouter();
  const { query } = router;
  const tempSub = new Subject(query.title as string, query.semester as string, parseInt(query.studentId as string) );

  return (
    <>
      <Header />
      <MypageMyAssign
        ass_id={parseInt(query.ass_id as string)}
        subject_i={tempSub}
        color={query.color as string}
        link_assigns="" //적당한 링크로
        link_ann=""
        link_att="/my/assignAbout/my_page_attendance"  
      />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;