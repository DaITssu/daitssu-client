
import React, { ChangeEvent, useState } from 'react';
import SubjectHomeCard from './my_page_main/subject_card';
import Category from '@/components/common/Category';
interface FormData {
  lectures?:Array<Array<string>>;
  assigns?:Array<Array<string>>;
  width?:number;
}
const ThingsEndedToday: React.FC<FormData> = () => {
  const [formData, setFormData] = useState<FormData>({
    lectures:[["일본어 입문","23:00까지","1"],["웹 프로그래밍","23:00까지","3"]],
    assigns:[["Ui/UX디자인","23:00까지","3"],["웹 프로그래밍","23:00까지","2"]],
    width: 390
  });
  const colorList=["#FFD4D4","#FFDDED","#FFE2D2","#FFF1CD","#E9F7C1","#C2F0D7","#D0E0FF",
    "#D5F3F2","#E4DAD5","#E9E1F7","#EBEBEB" ]

  return (
    <div style={{display: "flex",
    flexDirection: "column", 
    alignItems: "center", width:`${formData.width}`}}>
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start", // 왼쪽 정렬을 위해 flex-start 사용
        alignItems: "center", // 수직 정렬은 중앙 정렬 (선택사항)
        width: `${formData.width}px`, marginBottom:"10px"
      }}>
        <Category BgColor={false} label={"과목"} ></Category>
      </div>


      <div style={{display: "flex",
      flexDirection: "row", 
      alignItems: "center", width:`${formData.width}`}}>
        {formData.lectures!.slice(0,2).map((lecture, index) => (
            <>
                <SubjectHomeCard
                  key={index}
                  color={colorList[index]}
                  title={lecture[0]}
                  time={lecture[1]}
                  errN={parseInt(lecture[2])}
                  width={171}
                />
            </>
        ))}
      </div>

          <div style={{height:"10px"}}></div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start", // 왼쪽 정렬을 위해 flex-start 사용
        alignItems: "center", // 수직 정렬은 중앙 정렬 (선택사항)
        width: `${formData.width}px`, marginBottom:"10px"
      }}>
        <Category BgColor={false} label={"과목"} ></Category>
      </div>


      <div style={{display: "flex",
      flexDirection: "row", 
      alignItems: "center", width:`${formData.width}`}}>
        {formData.assigns!.slice(0,2).map((lecture, index) => (
            <>
                <SubjectHomeCard
                  key={index}
                  color={colorList[index+2]}
                  title={lecture[0]}
                  time={lecture[1]}
                  errN={parseInt(lecture[2])}
                  width={171}
                />
            </>
        ))}
      </div>
    
    </div>
  );
}
export default ThingsEndedToday;