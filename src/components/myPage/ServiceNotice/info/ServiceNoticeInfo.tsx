import * as styles from './ServiceNoticeInfo.styles';
import calendarIcon from '@icons/icon/Calendars/calendar.svg';

export interface ServiceNoticeInfoProps {
  title: string;
  createdAt: string;
  content: string;
}

const ServiceNoticeInfo: React.FC<ServiceNoticeInfoProps> = ({
  title,
  content,
  createdAt,
}) => {
  return (
    <styles.Container>
      <styles.InfoBox>
        <styles.TitleBox>{title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox src={calendarIcon} alt="date image" />
          <span>{createdAt}</span>
        </styles.MiddleBox>
        <hr />
        <styles.ContentBox>{content}</styles.ContentBox>
      </styles.InfoBox>
    </styles.Container>
  );
};

export default ServiceNoticeInfo;
