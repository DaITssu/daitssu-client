
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import SubjectCard from '@/components/myPage/assignesAbout/my_page_main/subject_card';
import { title } from 'process';
import SubmitHeader from '@/components/myPage/assignesAbout/Header/Header';
import AssignListTitleBox from '@/components/myPage/assignesAbout/my_page_my_assign/assign_title_box';
import AssignBoxEach from '@/components/myPage/assignesAbout/my_page_my_assign/assign_each_box';
import { COLORS } from '@/styles/constants/colors';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';
export interface FormData {
  subject:Subject;
  width:number;
}
const MypageAssignList: React.FC<FormData> = ({ width,subject }) => {
  const [formData, setFormData] = useState<FormData>({
    subject:subject,
    width: width,
  });
  formData.subject= new Subject("전달안됨","2028년 19학기-34",1241523);
  formData.subject.add_assign_data("과제1",new Date(2023,4,5),new Date(2023,12,3),new Date(2023,12,29))
  formData.subject.add_assign_data("과제2",new Date(2023,4,5),new Date(2223,3),new Date(2023,12,29))
  formData.subject.add_assign_data("과제3",new Date(2023,4,5),new Date(2223,3),new Date(2023,12,29))
  formData.width=390;
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
      <SubmitHeader width={formData.width} onClose={before_page} label="과제 목록"/>
      <AssignListTitleBox width={formData.width} title={formData.subject.get_title()}/>
      <div style={{width:formData.width, height:"25px",
        backgroundColor:`${COLORS.grayscale.Gray5}`,marginBottom:"3px" }}></div>
      
      
      {[...Array(formData.subject.get_assignments_len()).keys()].map((index) => (
        <React.Fragment key={index}>
          <AssignBoxEach
            width={width}
            title={formData.subject.get_assign_title(index)}
            dateString={formData.subject.get_assign_date_to_date(index)}
            isEnded={formData.subject.get_assign_isEnded(index)}
          />
          <div></div>
          <HorizontalLine></HorizontalLine>
        </React.Fragment>
      ))}
    </div>
  );
}
export default MypageAssignList;