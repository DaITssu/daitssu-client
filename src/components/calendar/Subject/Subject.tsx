import * as styles from './Subject.style';
import SubjectContents from '../SubjectContents';
import SubjectTitle from '../SubjectTitle';
import { SubjectProps } from '@/types/Subject';

const Subject = ({ subject }: SubjectProps) => (
  <>
    <SubjectTitle subject={subject}></SubjectTitle>
    <styles.LeftDiv>
      {subject.tasks.map((task, index) => (
        <SubjectContents key={index} task={task} />
      ))}
    </styles.LeftDiv>
  </>
);

export default Subject;
