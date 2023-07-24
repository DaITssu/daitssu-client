
import {useState} from "react";
import NoticeList from "./NoticeList";
import styled from '@emotion/styled';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const TopTab = ()=>{
  const data = [
    {
      id:0,
      title :"공지사항",
      contents:<NoticeList/>,
      pos : css`
      box-sizing: border-box;
      position: absolute;
      width: 71px;
      height: 36px;
      left: 16px;

      /* white */
      background: #FFFFFF;
      `,
    },
    {
      id:1,
      title :"펀시스템",
      contents:"펀시스템 내용!",
      pos : css`
      box-sizing: border-box;
      position: absolute;
      width: 71px;
      height: 36px;
      left: 87px;

      /* white */
      background: #FFFFFF;`
      
    }
  ];
  const [index,setIndex] = useState(0);

  const selectMenuHandler = (n : number) =>{
    setIndex(n);
  }
  return(

    <div>
      <Rectangle242/>
      <Group278>
        {data.map((element,idx)=>(
          <div 
            css={[
              element.pos,
              idx===index
              ? css`border-bottom: 2px solid #5EBEEB;`
              : css`border-bottom: 2px solid #D9D9D9;`,
            ]}
            onClick={() => selectMenuHandler(idx)} >
            <TabFontBox>
              <TabFont>{element.title}</TabFont>
            </TabFontBox>
          </div>
          // <div className={[element.pos,idx === index?styles.focused:styles.not_focused].join(" ")}
          // onClick={()=>selectMenuHandler(idx)}>
          //   <TabFontBox>
          //     <TabFont>{element.title}</TabFont>
          //   </TabFontBox>
          // </div>
        ))}
      </Group278>
      <p style={{top:"200px", position:"absolute"}}>{data[index].contents}</p>
    </div>
    
  );
};


`
/* 공지사항 */
margin: auto;
/* Body M 16 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 24px;
/* identical to box height, or 24px */
letter-spacing: -0.011em;

/* black */
color: #313131;

`;
const TabFont = styled.div 
`
margin: auto;
/* Body M 16 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 24px;
/* identical to box height, or 24px */
letter-spacing: -0.011em;

/* black */
color: #313131;

`;
const TabFontBox = styled.div
`
position: absolute;
width:55px;
height:24px;
top:8px;
left:8px;

`;

const Rectangle242 = styled.div
`
box-sizing: border-box;
position: absolute;
width: 390px;
height: 36px;
left: 0px;
top: 107px;
/* white */
background: #FFFFFF;
/* gray 3 */
border-bottom: 2px solid #D9D9D9;
`;
const Group278 = styled.div
`
position: absolute;
width: 390px;
height: 36px;
left: 0px;
top: 107px;
`;
export default TopTab;