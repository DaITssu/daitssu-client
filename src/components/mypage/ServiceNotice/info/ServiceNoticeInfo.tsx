import * as styles from './ServiceNoticeInfo.styles';
import { useState } from 'react';
import calendarIcon from '@icons/icon/Calendars/calendar.svg';

export interface ServiceNoticeInfoProps {
  title: string;
  date: string;
  content: string;
}

const ServiceNoticeInfo : React.FC<ServiceNoticeInfoProps> = ({
  title,
  date,
  content,
}) => {
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
  };
  return (
    <styles.Container>
      <styles.InfoBox>
        <styles.TitleBox>{title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox
            src={calendarIcon}
            alt="date image"
          />
          <span>{date}</span>
          
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
