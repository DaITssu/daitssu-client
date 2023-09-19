import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import { COLORS } from "@/styles/constants/colors";
import * as styles from "./title_box.styles"
interface FormData {
  title: string;
}

export default function MyAssignListBox(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
  });
  return (
    <styles.MyAssignListBox >
      <styles.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
        fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
        fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
        >{formData.title}</styles.MyAssignTitleBoxText>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.35625 17.6938C6.76458 18.1021 7.42292 18.1021 7.83125 17.6938L14.7562 10.7688C15.0813 10.4438 15.0813 9.91881 14.7562 9.59381L7.83125 2.66881C7.42292 2.26048 6.76458 2.26048 6.35625 2.66881C5.94792 3.07714 5.94792 3.73548 6.35625 4.14381L12.3896 10.1855L6.34792 16.2271C5.94792 16.6271 5.94792 17.2938 6.35625 17.6938Z" fill="#6E6E6E"/>
      </svg>
    </styles.MyAssignListBox>
  );
}
