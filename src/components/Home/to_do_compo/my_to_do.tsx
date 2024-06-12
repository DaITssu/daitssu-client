
import React, { ChangeEvent, useState } from 'react';
import SubjectHomeCard from './my_page_main/subject_card';
import Category from '@/components/common/Category';
import * as styled from '@/components/Home/to_do_compo/my_to_do.styles';
interface FormData {
  lectures?:Array<Array<string>>;
  assigns?:Array<Array<string>>;
  width?:number;
}
const ThingsEndedToday: React.FC<FormData> = ({lectures,assigns,width}:FormData) => {
  const [formData, setFormData] = useState<FormData>({
    lectures:[["일본어 입문","23:00까지","1"],["웹 프로그래밍","23:00까지","3"]],
    assigns:[["Ui/UX디자인","23:00까지","3"],["웹 프로그래밍","23:00까지","2"]],
    width: 390
  });
  /*
  const [formData, setFormData] = useState<FormData>({
    lectures:lectures,
    assigns:assigns,
    width: width
  });
  데이터 받아올 때는 위의 코드 대신 사용
  */
  const colorList=["#FFD4D4","#FFDDED","#FFE2D2","#FFF1CD","#E9F7C1","#C2F0D7","#D0E0FF",
    "#D5F3F2","#E4DAD5","#E9E1F7","#EBEBEB" ]

  return (
    <div>
      
      <styled.CardDisplays width={formData.width} margin={10} >
        <Category BgColor={false} label={"과목"} ></Category>
      </styled.CardDisplays>

      
      <styled.CardDisplays width={formData.width} margin={10} >
        {formData.lectures!.slice(0,2).map((lecture, index) => (
            <>
                <SubjectHomeCard
                  key={index}
                  color={colorList[index]}
                  title={lecture[0]}
                  time={lecture[1]}
                  alarmN={parseInt(lecture[2])}
                  width={171}
                />
            </>
        ))}
      </styled.CardDisplays>

      <div style={{height:"10px"}}></div>


      <styled.CardDisplays width={formData.width} margin={10} >
        <Category BgColor={false} label={"과목"} ></Category>
      </styled.CardDisplays>

      <styled.CardDisplays width={formData.width} margin={10} >
        {formData.assigns!.slice(0,2).map((lecture, index) => (
            <>
                <SubjectHomeCard
                  key={index}
                  color={colorList[index+2]}
                  title={lecture[0]}
                  time={lecture[1]}
                  alarmN={parseInt(lecture[2])}
                  width={171}
                />
            </>
        ))}
      </styled.CardDisplays>
    
    </div>
  );
}
export default ThingsEndedToday;