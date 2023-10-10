
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import SubjectCard from '@/components/myPage/assignesAbout/my_page_main/subject_card';
import { title } from 'process';
import AssignListTitleBox from '@/components/myPage/assignesAbout/my_page_my_assign/assign_title_box';
import AssignBoxEach from '@/components/myPage/assignesAbout/my_page_my_assign/assign_each_box';
import { COLORS } from '@/styles/constants/colors';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';
import AssignDetailBox from '@/components/myPage/assignesAbout/my_page_my_assign/base_box';
import AssignDetailScoreBox from '@/components/myPage/assignesAbout/my_page_my_assign/score_box';
interface FormData_d {
  subject:Subject;
  width:number;
  assIndex:number;
}
const MypageAssignList: React.FC<FormData_d> = ({ width,subject,assIndex }) => {
  const [formData, setFormData] = useState<FormData_d>({
    subject:subject,
    width: width,
    assIndex: assIndex,
  });

  formData.subject= new Subject("전달안됨","2028년 19학기-34",1241523);
  formData.subject.add_assign_data("과제1",new Date(2023,4,5),new Date(2023,12,3),new Date(2023,12,29),"information","cor",10,8)
  
  formData.subject.add_assign_data("과제2",new Date(2023,4,5),new Date(2223,3),new Date(2023,12,29))
  formData.width=390;
  formData.assIndex=0;

  function load_subjects(){
    //subject API로 받아와야됨
  }
  function before_page(){
    //이전페이지로
  }
  return (
    <div style={{display: "flex",
    flexDirection: "column", 
    alignItems: "center", width:`${formData.width}`}}>
      <AssignListTitleBox width={formData.width} title={formData.subject.get_assign_title(formData.assIndex)}/>
      <div style={{width:formData.width, height:"25px",
        backgroundColor:`${COLORS.grayscale.Gray5}`,marginBottom:"3px" }}></div>
      <AssignDetailBox title='마감' 
      dateString={formData.subject.get_assign_enddate(formData.assIndex)}  ></AssignDetailBox>
      <HorizontalLine></HorizontalLine>
      <AssignDetailBox title='제출' 
        dateString={formData.subject.get_assign_submitdate(formData.assIndex)} isEnded={true}></AssignDetailBox>
      <HorizontalLine></HorizontalLine>
      <AssignDetailScoreBox title='성적' 
        dateString1={formData.subject.get_assign_scores_to_string(formData.assIndex)[1]?.toString()}
        dataString2={"  / "+formData.subject.get_assign_scores_to_string(formData.assIndex)[0]?.toString()}></AssignDetailScoreBox>
      <HorizontalLine></HorizontalLine>
      <AssignDetailBox title='상세정보' dateString={formData.subject.get_assign_information(formData.assIndex)} ></AssignDetailBox>
      <HorizontalLine></HorizontalLine>
      <AssignDetailBox title='코멘트' dateString={formData.subject.get_assign_comment(formData.assIndex)}  ></AssignDetailBox>
      <HorizontalLine></HorizontalLine>
    </div>
  );
}
export default MypageAssignList;