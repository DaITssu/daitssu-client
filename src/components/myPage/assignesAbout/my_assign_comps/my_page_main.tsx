
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import SubjectCard from '@/components/myPage/assignesAbout/my_page_main/subject_card';
import { title } from 'process';

export interface FormData {
  subjects:Array<Subject>;
  width:number;
  ass_link?:string;
}
const MypageMain: React.FC<FormData> = ({ subjects,width,ass_link}) => {
  const [formData, setFormData] = useState<FormData>({
    subjects:[new Subject("웹프로그래밍","2028년 23학기-34",1241523),
    new Subject("웹프로그래밍","2028년 22학기-34",1241523),
    new Subject("웹프로그래밍","2028년 21학기-34",1241523),
    new Subject("웹프로그래밍","2028년 20학기-34",1241523),
    new Subject("웹프로그래밍","2028년 19학기-34",1241523),
    new Subject("웹프로그래밍","2028년 19학기-34",1241523),
    new Subject("웹프로그래밍","2028년 19학기-34",1241523),
    new Subject("웹프로그래밍","2028년 19학기-34",1241523),
    new Subject("웹프로그래밍","2028년 19학기-34",1241523),],
    width: width,
    ass_link:ass_link
  });
  const colorList=["#FFD4D4","#FFDDED","#FFE2D2","#FFF1CD","#E9F7C1","#C2F0D7","#D0E0FF",
    "#D5F3F2","#E4DAD5","#E9E1F7","#EBEBEB" ]

  function load_subjects(){
    //subject API로 받아와야됨
  }
  function before_page(){
    //이전페이지로
  }
  return (
    <div style={{display: "flex",
    flexDirection: "column", 
    alignItems: "center", width:`${formData.width}`}}>
      <div>
        {formData.subjects.map((sub, index) => (
          <>
            {(index % 2 == 0) && <br />}
            <SubjectCard
              key={index}
              color={colorList[index]}
              title={sub.get_title()}
              semester={sub.get_semester()}
              studentId={sub.get_studentId()}
            />
            <div key={index} style={{ display: "table-cell", verticalAlign: "middle",width:"20px" } }></div>

          </>
        ))}
      </div>
          
    </div>
  );
}
export default MypageMain;