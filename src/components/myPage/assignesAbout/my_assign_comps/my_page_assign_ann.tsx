
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import AssignListTitleBox from '@/components/myPage/assignesAbout/my_page_my_assign/assign_title_box';
import { COLORS } from '@/styles/constants/colors';
import AnnouncemeCard from '@/components/myPage/assignesAbout/my_page_announce/ann_card';

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

  formData.subject= new Subject("웹프로그래밍 (가)","2028년 19학기-34",1241523);
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
    alignItems: "center", width:`${formData.width}`,backgroundColor:`${COLORS.grayscale.white}`,
    height: "500px"}}>
      <AssignListTitleBox width={formData.width} title={formData.subject.get_title()}/>
      <div style={{width:`${formData.width}px`, height:"25px",
        backgroundColor:`${COLORS.grayscale.Gray5}`,marginBottom:"3px" }}></div>
      
      <br/>
      <AnnouncemeCard color={COLORS.SSU.secondary} width={formData.width-20} 
      title="과제 공지" semester='1706회' studentId="23/05/11"/>
      <div style={{height:"30px"}}></div>
      <AnnouncemeCard color={COLORS.grayscale.Gray5} width={formData.width-20} 
      title="과제 공지" semester='1706회' studentId="23/05/11"/>  
    </div>
  );
}
export default MypageAssignList;