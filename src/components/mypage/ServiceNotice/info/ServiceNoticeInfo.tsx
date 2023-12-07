import * as styles from './ServiceNoticeInfo.styles';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';
import backArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import watchIcon from '@icons/icon/Icon18/SmallHits.svg';
import calendarIcon from '@icons/icon/Calendars/calendar.svg';
export interface ServiceNoticeInfoProps {
  title: string;
  date: string;
  watchCount: number;
  content: string;
}

const ServiceNoticeInfo : React.FC<ServiceNoticeInfoProps> = ({
  title,
  date,
  watchCount,
  content,
}) => {
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
  };
  return (
    <styles.Container>
      <styles.MenuBox>
        <styles.LeftBox
          src = {backArrow}
          alt="goback"
        >
          
        </styles.LeftBox>
        <styles.CenterBox>서비스 공지사항</styles.CenterBox>
      </styles.MenuBox>
      <styles.InfoBox>
   
        <styles.TitleBox>{title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox
            src={calendarIcon}
            alt="date image"
          />
         
          <span>{date}</span>
          <styles.WatchBox
            src = {watchIcon}
            alt="watch count">
          </styles.WatchBox>
          <span>{watchCount}회</span>
        </styles.MiddleBox>
        <hr />
        <styles.ContentBox>
          {content}
        </styles.ContentBox>
        
      </styles.InfoBox>
      
    </styles.Container>
  );
};

export default ServiceNoticeInfo;
