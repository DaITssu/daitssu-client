import * as styles from './Subject.style';
import SubjectContents from '../SubjectContents';
import SubjectTitle from '../SubjectTitle';
import { CalendersResponse } from '../CalendarScreen/CalendarScreen';

const Subject = ({ subject }: { subject: CalendersResponse }) => (
  <>
    <SubjectTitle title={subject.course}></SubjectTitle>
    <styles.LeftDiv>
      {subject.calendarResponses.map((task, index) => (
        <SubjectContents key={index} task={task} />
      ))}
    </styles.LeftDiv>
  </>
);

export default Subject;
