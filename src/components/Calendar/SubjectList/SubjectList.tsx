import Subject from '../Subject';
import * as styles from './SubjectList.style';
import { CalendersResponse } from '../CalendarScreen/CalendarScreen';

const SubjectList = ({ subjectList }: { subjectList: CalendersResponse[] }) => {
  return (
    <styles.Container>
      {subjectList.map((subject, index) => (
        <Subject key={index} subject={subject} />
      ))}
    </styles.Container>
  );
};

export default SubjectList;
