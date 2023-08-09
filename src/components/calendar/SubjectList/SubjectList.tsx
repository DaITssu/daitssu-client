import Subject from '../Subject';
import { SubjectDTO } from '@/types/Subject';
import * as styles from './SubjectList.style';

interface SubjectListProps {
  subjectList: SubjectDTO[];
}

const SubjectList = ({ subjectList }: SubjectListProps) => (
  <styles.Container>
    {subjectList.map((subject, index) => (
      <Subject key={index} subject={subject} />
    ))}
  </styles.Container>
);

export default SubjectList;
