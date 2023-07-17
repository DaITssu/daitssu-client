import styles from "../styles/Top.module.css";
import React from 'react';

export interface NoticeItemProps {
  bundle: string;
  title: string;
  views:number;
  date:string;
}

interface Props{
  item:NoticeItemProps;
}

const NoticeItem:React.FC<Props> = ({item}:Props)=>{
  const notice_onClick = () =>{

  }
  return(
    
    <button className={styles.notice_item} onClick ={notice_onClick}>
      
      <div className = {styles.notice_status}>
        <div className = {styles.notice_text}>
          {item.bundle}
        </div>
      </div>
      
      <text className = {styles.notice_title_font}>
        {item.title}
      </text>
      <img src="/images/view_icon.png" className={styles.view_icon}/>
      <text className = {styles.notice_views}>
        {item.views.toLocaleString('ko-KR')}회
      </text>
      <text className = {styles.notice_date}>
        {item.date}
      </text>
    </button>
  );
};
export default NoticeItem;