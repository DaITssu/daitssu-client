import React from "react";
import { Subject } from "@/components/myPage/assignesAbout/subjects_data";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import * as styles from "./subject_card.styles";
import { COLORS } from "@/styles/constants/colors";
import Link from "next/link";
import { title } from "process";


interface FormData {
  ass_id?:number;
  title?: string;
  semester?: string;
  studentId?:number;
  color:string;
  width?:number;
  link?:string;
}

export default function SubjectCard(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    semester: f.semester,
    studentId: f.studentId,
    color: f.color,
    width:f.width,
    link: (f.link? f.link : "/my_page/my_page_my_assign"),
    ass_id:f.ass_id
  });
  return (
    
    <Link style={{display: "table-cell", verticalAlign: "middle"}}
      href={{
        pathname:formData.link,
        query: { 
          ass_id:formData.ass_id,
          title:formData.title,
          semester:formData.semester,
          studentId:formData.studentId,
          color: formData.color,
        }
      }}
      
        as={f.link? f.link+`/${formData.title}` :`/my_page/my_page_my_assign/${formData.title}`}>
      <styles.SubjectCard color={formData.color} width={formData.width}
      onClick={()=>{console.log("Link Clicked");
      console.log(JSON.stringify(new Subject(formData.title,formData.semester, formData.studentId)));}}>
        <styles.SubjectCardText color={COLORS.grayscale.Black} 
        fontSize={TEXT_STYLES.HeadM18.fontSize} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
        fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
        >{formData.title}</styles.SubjectCardText>
        <styles.SubjectCardText> {formData.semester}</styles.SubjectCardText>
        <styles.SubjectCardText> {formData.studentId}</styles.SubjectCardText>
      </styles.SubjectCard>
    </Link>
  );
}
