import styles from "../styles/Top.module.css";
import {useState} from "react";
import NoticeList from "./NoticeList";
const TopTab = ()=>{
  const data = [
    {
      id:0,
      title :"공지사항",
      contents:<NoticeList/>,
      pos : styles.notice_button
    },
    {
      id:1,
      title :"펀시스템",
      contents:"펀시스템 내용!",
      pos : styles.fun_system_button
    }
  ];
  const [index,setIndex] = useState(0);

  const selectMenuHandler = (n : number) =>{
    setIndex(n);
  }
  return(

    <div>
      <div className = {styles.Rectangle_242}>
        <img src = "images/Rectangle_242.png"/>
      </div>
      
      <div className ={styles.Group_278}>
        {data.map((element,idx)=>(
          <div className={[element.pos,idx === index?styles.focused:styles.not_focused].join(" ")}
          onClick={()=>selectMenuHandler(idx)}>
            <div className={styles.tab_font_box }>
              <div className={styles.TabFont}>{element.title}</div>
            </div>
          </div>
        ))}
      </div>
      <p style={{top:"200px", position:"absolute"}}>{data[index].contents}</p>
    </div>
    
  );
};
export default TopTab;