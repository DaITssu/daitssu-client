import { TaskDTO, TaskProps } from '@/types/Task';
import * as styles from './Subject.style';
import TaskDetails from '../TaskDetails';
import SubjectDetails from '../SubjectDetails';
import { SubjectProps } from '@/types/Subject';

const Subject = ({ subject }: SubjectProps) => (
  <>
    <SubjectDetails subject={subject}></SubjectDetails>
    <styles.LeftDiv>
      {subject.tasks.map((task, index) => (
        <TaskDetails key={index} task={task} />
      ))}
    </styles.LeftDiv>
  </>
);

export default Subject;
