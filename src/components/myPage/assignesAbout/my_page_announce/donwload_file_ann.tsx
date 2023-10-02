import React from "react";
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import { useState } from "react";
import { COLORS } from "@/styles/constants/colors";
import * as style from "@/components/myPage/assignesAbout/total.styles"


interface FormData {
  title: string;
  color:string;
  file_link:string;
  width?:number;
}

export default function AnnouncemeDownLoadFile(f:FormData) {
  const [formData, setFormData] = useState<FormData>({
    title: f.title,
    file_link: f.file_link,
    color: f.color,
    width:f.width
  });
  return (
    <a href={formData.file_link} download style={{textDecoration: "none"}}> 
        <style.MyAssignTitleBox height={45} color={COLORS.grayscale.Gray4} style={{borderRadius: "10px",
      alignItems:"center"}}>
          <div style={{ width:"350px" ,display: "flex", 
            justifyContent: "space-between", alignItems: "center", marginLeft:"5px"}}>
                <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
                fontSize={TEXT_STYLES.CapR14.fontSize+2} fontFamily={TEXT_STYLES.CapR14.fontFamily}
                fontWeight={TEXT_STYLES.CapR14.fontWeight} letterSpacing={TEXT_STYLES.CapR14.letterSpacing}
                style={{width:"150px", marginTop:"0px" }} >{formData.title}
                </style.MyAssignTitleBoxText>
                <img src="/assets/icon/Icon24/Download.svg" style={{marginTop:"0px",
                alignSelf: "flex-start", 
                width: "20px", marginRight:"4px"}}/>
          </div>

        </style.MyAssignTitleBox>
      </a>
  );
}
