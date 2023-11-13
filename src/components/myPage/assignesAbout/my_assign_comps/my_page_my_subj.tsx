import React from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import MyAssignTitleBox from '@/components/myPage/assignesAbout/my_page_my_assign/title_box';
import MyAssignListBox from '@/components/myPage/assignesAbout/my_page_my_assign/\blist_box';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';
import Link from 'next/link';

interface MypageMyAssignProps {
  subject_i?: Subject;
  color: string;
  width?: number;
  link_assigns?: string;
  link_ann?: string;
  link_att?: string;
  ass_id?:number;
}

function MypageMyAssign({
  subject_i,
  color,
  width,
  link_assigns,
  link_ann,
  link_att,
  ass_id
}: MypageMyAssignProps) {
  
  const subject =subject_i?subject_i
      : new Subject('전달안됨', '2028년 19학기-34', 1241523);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: `${width}px`,
      }}
    >
      <br />
      <MyAssignTitleBox
        color={color}
        width={width}
        title={subject.get_title() as string}
        semester={subject.get_semester()}
        studentId={subject.get_studentId()}
      />
      <br />
      <Link href={link_assigns || '/unun'}>
        <MyAssignListBox title="과제 목록" />
      </Link>
      <HorizontalLine></HorizontalLine>

      <Link href={link_ann || '/unun'}>
        <MyAssignListBox title="공지" />
      </Link>

      <HorizontalLine></HorizontalLine>

      <Link href={{
        pathname: link_att || 'unn',
        query: { 
          title: subject_i? subject_i.get_title(): "none",
          semester:subject_i? subject_i.get_semester():"none",
          studentId: subject_i? subject_i.get_studentId(): "none",
          ass_id:ass_id
        }
      }}>
        <MyAssignListBox title="출결 상황" />
      </Link>

      <HorizontalLine></HorizontalLine>
    </div>
  );
}

export default MypageMyAssign;
