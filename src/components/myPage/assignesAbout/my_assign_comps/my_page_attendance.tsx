import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import { COLORS } from '@/styles/constants/colors';
import HorizontalLine from '@/components/myPage/assignesAbout/HorizontalLine/HorizontalLine';
import * as style from "@/components/myPage/assignesAbout/total.styles"
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import EachWeekAttendance from '@/components/myPage/assignesAbout/attendance_table/each_week';
interface FormData {
  subject:Subject;
  width:number;
  numberList:Array<Array<number>>
}
const MypageAssignList: React.FC<FormData> = ({ width,subject,numberList }) => {
  const [formData, setFormData] = useState<FormData>({
    subject:subject,
    width: width,
    numberList:numberList
  });

  formData.subject= new Subject("웹프로그래밍 (가)","2028년 19학기-34",1241523);
  formData.width=390;
  formData.numberList=[[1,1],[1,1],[2,3],[1,1],[1,3],[2,1]];
  const elementCount: { [key: number]: number } = {};

  for (const row of formData.numberList) {
    for (const element of row) {
      elementCount[element] = (elementCount[element] || 0) + 1;
    }
  }
  

  
  function before_page(){
    //이전페이지로
  }
  return (
    <div style={{display: "flex",
    flexDirection: "column", 
    alignItems: "center", width:`${formData.width}`}}>
      <style.MyAssignTitleBox>
        <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
          fontSize={TEXT_STYLES.HeadM18.fontSize+5} fontFamily={TEXT_STYLES.HeadM18.fontFamily}
          fontWeight={TEXT_STYLES.HeadM18.fontWeight} letterSpacing={TEXT_STYLES.HeadM18.letterSpacing}
          style={{marginTop:"5px"}}> {formData.subject.get_title()}
        </style.MyAssignTitleBoxText>
      </style.MyAssignTitleBox>

      <style.MyAssignTitleBox height={38} > 
        <div style={{ width:"80px" ,display: "flex", 
        justifyContent: "space-between", alignItems: "center"}}>
          
          <style.MyAssignTitleBox width={84} > 
              <style.MyAssignTitleBoxText  style={{width:"300px"}}> 
              총 강의 30
              </style.MyAssignTitleBoxText>
          </style.MyAssignTitleBox>

          <div style={{ width:"180px" ,display: "flex", 
          justifyContent: "space-between", alignItems: "center"}}>
              <img src="/assets/icon/Shape/Ellipse.svg" style={{marginTop:"7px",
              alignSelf: "flex-start", 
              width: "13px", marginRight:"4px"}}/>
              <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
                fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                style={{width:"30px"}}>출석</style.MyAssignTitleBoxText>
                <style.MyAssignTitleBoxText color={COLORS.SSU.accept} 
                  fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                  fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                  style={{width:"30px"}}>{elementCount[1]}</style.MyAssignTitleBoxText>
          </div>

          <div style={{ width:"180px" ,display: "flex", 
          justifyContent: "space-between", alignItems: "center"}}>
              <img src="/assets/icon/Shape/Triangle.svg" style={{marginTop:"7px",
              alignSelf: "flex-start", 
              width: "13px", marginRight:"4px"}}/>
              <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
                fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                style={{width:"30px"}}>지각</style.MyAssignTitleBoxText>
              <style.MyAssignTitleBoxText color={COLORS.SSU.yellow} 
                fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                style={{width:"30px"}}>{elementCount[2]}</style.MyAssignTitleBoxText>
          </div>

          <div style={{ width:"180px" ,display: "flex", 
          justifyContent: "space-between", alignItems: "center"}}>
              <img src="/assets/icon/Shape/X.svg" style={{marginTop:"7px",
              alignSelf: "flex-start", 
              width: "13px", marginRight:"4px"}}/>
              <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
                fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                style={{width:"30px"}}>결석</style.MyAssignTitleBoxText>
              <style.MyAssignTitleBoxText color={COLORS.SSU.error} 
                fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
                fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
                style={{width:"30px"}}>{elementCount[3]}</style.MyAssignTitleBoxText>
          </div>

        </div>
      </style.MyAssignTitleBox>

      <thead >
        <tr>
          <th style={{width:"155px",height:"37px",textAlign:"left",backgroundColor:COLORS.grayscale.Gray4,
        paddingLeft:"15px"}}>
            <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
            fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
            fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
            style={{marginTop:"5px"}}> 주차
            </style.MyAssignTitleBoxText>
          </th>
          <th style={{width:"155px",height:"37px",textAlign:"left",backgroundColor:COLORS.grayscale.Gray4,}}>
            <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
            fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
            fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
            style={{marginTop:"5px"}}> 차시
            </style.MyAssignTitleBoxText>
          </th>
          <th style={{width:"80px",height:"37px",textAlign:"center",backgroundColor:COLORS.grayscale.Gray4,}}>
            <style.MyAssignTitleBoxText color={COLORS.grayscale.Black} 
            fontSize={TEXT_STYLES.CapM14.fontSize} fontFamily={TEXT_STYLES.CapM14.fontFamily}
            fontWeight={TEXT_STYLES.CapM14.fontWeight} letterSpacing={TEXT_STYLES.CapM14.letterSpacing}
            style={{marginTop:"5px"}}> 상태
            </style.MyAssignTitleBoxText>
          </th>
        </tr>
      </thead>
      <tbody>
        {formData.numberList.map((item, index) => (
          <EachWeekAttendance
            weekN={index + 1}
            attList={item}
            color={index % 2 === 1 ? COLORS.grayscale.Gray5 : undefined}
          ></EachWeekAttendance>
        ))}
      </tbody>


    </div>
  );
}
export default MypageAssignList;