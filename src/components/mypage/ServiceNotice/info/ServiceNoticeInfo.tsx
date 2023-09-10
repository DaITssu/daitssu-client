import * as styles from './ServiceNoticeInfo.style';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';

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
        <styles.LeftBox>
          <Image
            src="/noticeInfo/backarrow.svg"
            alt="goback"
            width={8.95}
            height={15.64}
            priority
          />
        </styles.LeftBox>
        <styles.CenterBox>서비스 공지사항</styles.CenterBox>
      </styles.MenuBox>
      <styles.InfoBox>
   
        <styles.TitleBox>{title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox>
            <Image
              src="/noticeInfo/calendar.svg"
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>{date}</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src="/noticeInfo/watch.svg"
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>{watchCount}회</span>
          </styles.WatchBox>
          
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
