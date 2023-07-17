import SubjectList from '@/components/calendar/SubjectList';
import { SubjectDTOExample } from '@/types/Subject';

export default function Calendar() {
  return (
    <div>
      <SubjectList subjectList={[SubjectDTOExample, SubjectDTOExample]} />
    </div>
  );
}
