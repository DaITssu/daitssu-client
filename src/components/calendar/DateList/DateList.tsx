import Subject from '../Subject';
import { SubjectDTO } from '@/types/Subject';

interface DateListProps {
  subjectList: SubjectDTO[];
}

const DateList = ({ subjectList }: DateListProps) => (
  <>
    {subjectList.map((subject, index) => (
      <Subject key={index} subject={subject} />
    ))}
  </>
);

export default DateList;
