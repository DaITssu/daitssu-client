import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import { COLORS } from "@/styles/constants/colors";
import * as styles from "../total.styles";
interface FormData {
  title?: string;
  width?:number;

}

export default function AssignListTitleBox(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    width:f.width
  });
  return (
    <>
    <styles.MyAssignTitleBox width={formData.width} height={54}>
      <styles.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
        fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
        fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
        >{formData.title}</styles.MyAssignTitleBoxText>
    </styles.MyAssignTitleBox>
    </>
  );
}
