
import React, { ChangeEvent, useState } from 'react';
import { Subject } from '@/components/myPage/assignesAbout/subjects_data';
import SubjectCard from '@/components/myPage/assignesAbout/my_page_main/subject_card';
import { title } from 'process';
import axios from 'axios'
import { useEffect } from 'react';

export interface FormData {
  subjects?:Array<Subject>;
  subjects_id?:Array<number>;
  width?:number;
  ass_link?:string;
}
const MypageMain: React.FC<FormData> = ({ subjects,width,ass_link}) => {

  const [formData, setFormData] = useState<FormData>({
    subjects:[],
    subjects_id:[],
    width: width,
    ass_link:ass_link
  });
  const this_sem="2023-1학기"
  useEffect(() => {
    // API 호출
    axios.get('https://api.daitssu.com/course')
      .then(res => {
        const listnn = res.data.data;
        const updatedSubjects = listnn.map((item: any) => {
          const regex = / \(\d+\)/;
          const splitStrings = item.name.split(regex);
          const reg = new RegExp(/[0-9]+/, "g");
          const splitNums=parseInt(item.name.match(reg).join(""));
          return new Subject(splitStrings as string , this_sem, splitNums);
        });
        const updatedSubjects_id = listnn.map((item: any) => {
          return item.id
        });

        // 상태 업데이트
        setFormData({
          ...formData,
          subjects: updatedSubjects,
          subjects_id:updatedSubjects_id
        });
      })
      .catch(error => {
        console.error('API 호출 중 에러 발생: ', error);
      });
  }, []); // 빈 배열을 두어서 컴포넌트가 마운트될 때 한 번만 API를 호출

  const colorList=["#FFD4D4","#FFDDED","#FFE2D2","#FFF1CD","#E9F7C1","#C2F0D7","#D0E0FF",
  "#D5F3F2","#E4DAD5","#E9E1F7","#EBEBEB","#FFD4D4","#FFDDED","#FFE2D2","#FFF1CD","#E9F7C1","#C2F0D7","#D0E0FF",
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
        {formData.subjects!.map((sub, index) => (
          <>
            {(index % 2 == 0) && <br />}
            <SubjectCard
              key={sub.get_studentId()}
              ass_id={formData.subjects_id![index]}
              color={colorList[index]}
              title={sub.get_title()}
              semester={sub.get_semester()}
              studentId={sub.get_studentId()}
              link={formData.ass_link}
            />
            <div key={index} style={{ display: "table-cell", verticalAlign: "middle",width:"20px" } }></div>

          </>
        ))}
      </div>
          
    </div>
  );
}
export default MypageMain;