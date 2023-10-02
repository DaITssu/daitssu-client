import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import { COLORS } from "@/styles/constants/colors";
import * as styles from "../total.styles";
import Status from "@/components/common/Status";

interface FormData {
  title?: string;
  dateString?:string;
  width?:number;
  isEnded?:boolean|"none";
}

export default function AssignBoxEach(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    dateString:f.dateString,
    width:f.width,
    isEnded:f.isEnded
  });
  return (
    <>
    <styles.MyAssignTitleBox width={formData.width} height={80}>
      <div style={{display: "flex", justifyContent: "space-between",
      width:formData.width,}}>
        <styles.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
          fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
          fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}>
            {formData.title}
        </styles.MyAssignTitleBoxText>
        <img width={28} src="/assets/icon/LectureAssignment/Comment.svg" />
      </div>

      <div style={{height:"10px"}}></div>

      <div style={{display: "flex", justifyContent: "space-between",
      width:formData.width,}}>
        <styles.MyAssignTitleBoxText>
          {formData.dateString}
        </styles.MyAssignTitleBoxText>
        <Status label={formData.isEnded?'완료':'미완료'}status={formData.isEnded?1:0} ></Status>
      </div>
    </styles.MyAssignTitleBox>
    </>
  );
}
