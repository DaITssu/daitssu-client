import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import { COLORS } from "@/styles/constants/colors";
import * as styles from "./title_box.styles";
interface FormData {
  title?: string;
  semester?: string;
  studentId?:number;
  color:string;
  width?:number;
}

export default function MyAssignTitleBox(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    semester: f.semester,
    studentId: f.studentId,
    color: f.color,
    width:f.width
  });
  return (
    <>
    <styles.MyAssignTitleBox color={formData.color} width={formData.width}>
      <styles.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
        fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
        fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
        >{formData.title}</styles.MyAssignTitleBoxText>
      <styles.MyAssignTitleBoxText>{formData.semester}</styles.MyAssignTitleBoxText>
      <styles.MyAssignTitleBoxText>{formData.studentId}</styles.MyAssignTitleBoxText>
    </styles.MyAssignTitleBox>
    </>
  );
}
