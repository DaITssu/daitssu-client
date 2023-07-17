import Subject from '../Subject';
import { SubjectDTO } from '@/types/Subject';

interface SubjectListProps {
  subjectList: SubjectDTO[];
}

const SubjectList = ({ subjectList }: SubjectListProps) => (
  <>
    {subjectList.map((subject, index) => (
      <Subject key={index} subject={subject} />
    ))}
  </>
);

export default SubjectList;
