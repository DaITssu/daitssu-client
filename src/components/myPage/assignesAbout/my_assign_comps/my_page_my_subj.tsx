import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import MyAssignTitleBox from '@/components/myPage/assignesAbout/my_page_my_assign/title_box';
import MyAssignListBox from '@/components/myPage/assignesAbout/my_page_my_assign/\blist_box';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';

interface MypageMyAssignProps {
  subject_j: string;
  color: string;
  width?:number;
}

function MypageMyAssign({ subject_j, color,width }:MypageMyAssignProps){
  
  function before_page() {
    // 이전페이지로
  }

  const subject = typeof subject_j === 'string' ? JSON.parse(subject_j) : new Subject("전달안됨","2028년 19학기-34",1241523);
  return (
    <div style={{display: "flex",
    flexDirection: "column", 
    alignItems: "center", width:`${width}`}}>
      <br/>
      <MyAssignTitleBox color={color} width={width} 
        title={subject.get_title()} semester={subject.get_semester()} studentId={subject.get_studentId()}/>
      <br/>
      <MyAssignListBox title='과제 목록'/>
      <HorizontalLine></HorizontalLine>
      <MyAssignListBox title='공지'/>
      <HorizontalLine></HorizontalLine>
      <MyAssignListBox title='출결 상황'/>
      <HorizontalLine></HorizontalLine>
    </div>
  );
};

export default MypageMyAssign;
