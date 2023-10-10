
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import { COLORS } from '@/styles/constants/colors';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';
import * as style from "@/components/myPage/assignesAbout/total.styles"
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import AnnouncemeDownLoadFile from '@/components/myPage/assignesAbout/my_page_announce/donwload_file_ann';
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
  const text_m="information my information, your information shallo \n infor infor";
  formData.subject= new Subject("웹프로그래밍 (가)","2028년 19학기-34",1241523);
  formData.subject.add_assign_data("과제1",new Date(2023,4,5),new Date(2023,12,3),new Date(2023,12,29),"information","cor",10,8)
  formData.subject.add_assign_data("과제2",new Date(2023,4,5),new Date(2223,3),new Date(2023,12,29),"information","cor",10,8)
  formData.subject.add_assign_data("기말고사 공지",new Date(2023,4,5),new Date(2223,3),new Date(2023,12,29),text_m,"cor",10,8)
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
    alignItems: "center", width:`${formData.width}`, backgroundColor:`${COLORS.grayscale.white}`}}>
      
      
      <style.MyAssignTitleBox height={84}> 
        <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
          fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
          fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
          > {formData.subject.get_assign_title(2)}
        </style.MyAssignTitleBoxText>
        <div style={{height:"5px"}}></div>
        <div style={{ width:"80px" ,display: "flex", 
        justifyContent: "space-between", alignItems: "center"}}>
            <img src="/assets/icon/Nav/calendar_off.svg" style={{marginTop:"2px",
            alignSelf: "flex-start", 
            width: "20px", marginRight:"4px"}}/>
            <style.MyAssignTitleBoxText>{formData.subject.get_assign_startdate(2)}</style.MyAssignTitleBoxText>
        </div>
      </style.MyAssignTitleBox>

      <HorizontalLine height={1}></HorizontalLine>

      <style.MyAssignTitleBox height={254} style={{
        justifyContent:"flex-start", }}>
        <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
          fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
          fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
          style={{marginTop:"5px"}}> {formData.subject.get_assign_information(2)}
        </style.MyAssignTitleBoxText>
      </style.MyAssignTitleBox>

      <HorizontalLine height={1}></HorizontalLine>
      

      <style.MyAssignTitleBox height={43} style={{
        justifyContent:"flex-start", }}> 
        <div style={{height:"5px"}}></div>
        <div style={{ width:"150px" ,display: "flex", 
        justifyContent: "space-between", alignItems: "center"}}>
            <img src="/assets/icon/Icon24/AttachedFile.svg" style={{marginTop:"2px",
            alignSelf: "flex-start", 
            width: "20px", marginRight:"4px"}}/>
            <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
            fontSize={TEXT_STYLES.HeadM18.fontSize+3} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
            fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
            style={{width:"150px", marginTop:"0px" }} >첨부파일
            </style.MyAssignTitleBoxText>
        </div>
      </style.MyAssignTitleBox>
      
      <AnnouncemeDownLoadFile title="첨부파일" file_link="dd" color={COLORS.grayscale.Black}></AnnouncemeDownLoadFile>
    </div>
  );
}
export default MypageAssignList;