import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import MypageAssignList from '@/components/myPage/assignesAbout/my_assign_comps/my_page_attendance';

import { useRouter } from 'next/router';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
export default function Home() {
  const router = useRouter();
  const { query } = router;
  const tempSub = new Subject(query.title as string, query.semester as string, parseInt(query.studentId as string) );

  return (
    <>
      <Header />
      <MypageAssignList 
        subject={tempSub}
        ass_id={parseInt(query.ass_id as string)}
        width={390}
        numberList={[]}
      />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
;