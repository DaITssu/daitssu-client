
import {useState} from "react";
import NoticeList from "./NoticeList";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import * as styles from '../../styles/constants/TopTab.style'
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
      <styles.Rectangle242/>
      <styles.Group278>
        {data.map((element,idx)=>(
          <div 
            css={[
              element.pos,
              idx===index
              ? css`border-bottom: 2px solid #5EBEEB;`
              : css`border-bottom: 2px solid #D9D9D9;`,
            ]}
            onClick={() => selectMenuHandler(idx)} >
            <styles.TabFontBox>
              <styles.TabFont>{element.title}</styles.TabFont>
            </styles.TabFontBox>
          </div>
          // <div className={[element.pos,idx === index?styles.focused:styles.not_focused].join(" ")}
          // onClick={()=>selectMenuHandler(idx)}>
          //   <TabFontBox>
          //     <TabFont>{element.title}</TabFont>
          //   </TabFontBox>
          // </div>
        ))}
      </styles.Group278>
      <p style={{top:"200px", position:"absolute"}}>{data[index].contents}</p>
    </div>
    
  );
};



export default TopTab;