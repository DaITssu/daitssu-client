import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import * as styles from "./subject_card.styles";
import { COLORS } from "@/styles/constants/colors";


interface FormData {
  title?: string;
  time?: string;
  color:string;
  width?:number;
  height?:number;
  errN?:number
}

export default function SubjectHomeCard(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    time: f.time,
    errN:f.errN,
    color: f.color,
    width:f.width,
    height:f.height
  });
  return (
    
      <styles.SubjectCard color={formData.color} width={formData.width} height={formData.height}
      onClick={()=>{console.log("clicked")}}>
        <div style={{ width:"170px" ,display: "flex", 
            justifyContent: "space-between", alignItems: "center"}}>
            <styles.SubjectCardText color={COLORS.grayscale.Black} 
            fontSize={TEXT_STYLES.HeadM18.fontSize} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
            fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
            >{formData.title}</styles.SubjectCardText>
            <styles.NoticeNumRound>
              <styles.SubjectCardText color={COLORS.grayscale.white} 
              fontSize={TEXT_STYLES.CapM12.fontSize} fontFamily={TEXT_STYLES.CapM12.fontFamily}
              fontWeight={TEXT_STYLES.CapM12.fontWeight} letterSpacing={TEXT_STYLES.CapM12.letterSpacing}
              >{formData.errN}</styles.SubjectCardText>
            </styles.NoticeNumRound>
        </div>
        <styles.SubjectCardText> {formData.time}</styles.SubjectCardText>
      </styles.SubjectCard>
  );
}
