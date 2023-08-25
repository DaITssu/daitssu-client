import * as styles from './ServiceNoticeInfo.style';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';

const ServiceNoticeInfo = () => {
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
   
        <styles.TitleBox>6/23 (금) 시스템 점검 및 업데이트 안내</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox>
            <Image
              src="/noticeInfo/calendar.svg"
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>2023/05/11</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src="/noticeInfo/watch.svg"
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>1706회</span>
          </styles.WatchBox>
          
        </styles.MiddleBox>
        <hr />
        <styles.ContentBox>
          안녕하세요 다잇슈입니다.<br/>
          더욱 쾌적하고 안정적인 서비스 지원을 위해 아래와 같이 <br/>
          점검이 진행됩니다.
        </styles.ContentBox>
        
      </styles.InfoBox>
      
    </styles.Container>
  );
};

export default ServiceNoticeInfo;
