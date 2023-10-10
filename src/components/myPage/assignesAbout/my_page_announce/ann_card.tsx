import React from "react";
import { Subject } from "@/components/myPage/assignesAbout/subjects_data";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import * as styles from "../ann_card.styles";
import { COLORS } from "@/styles/constants/colors";


interface FormData {
  title?: string;
  semester?: string;
  studentId?:string;
  color:string;
  width?:number;
}

export default function AnnouncemeCard(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    semester: f.semester,
    studentId: f.studentId,
    color: f.color,
    width:f.width
  });
  return (
    
      <styles.SubjectCard color={formData.color} width={formData.width}>
        <div style={{ display: "flex", flexDirection: "column" 
        ,marginLeft:"20px",marginTop:"10px"}}>
          <styles.SubjectCardText color={COLORS.grayscale.Black} 
          fontSize={TEXT_STYLES.HeadM18.fontSize} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
          fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
          >{formData.title}</styles.SubjectCardText>
          <div style={{ width:`${formData.width!-50}px` ,display: "flex", 
          justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width:"80px" ,display: "flex", 
            justifyContent: "space-between", alignItems: "center"}}>
              <img src="/assets/icon/Icon24/Hits.svg" style={{marginTop:"-2px",
              alignSelf: "flex-start", 
              width: "18px", marginRight:"4px"}}/>
              <styles.SubjectCardText> {formData.semester}</styles.SubjectCardText>
            </div>
            <styles.SubjectCardText> {formData.studentId}</styles.SubjectCardText>
          </div>
        </div>
      </styles.SubjectCard>
  );
}
