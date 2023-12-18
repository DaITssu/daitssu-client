import * as styles from './SubjectTitle.style';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';
import { SubjectProps } from '@/types/Subject';

const SubjectTitle = ({ subject }: SubjectProps) => {
  return (
    <styles.Container>
      <styles.LeftDiv>
        <styles.ColorDiv color={subject.color} />
        <styles.Label style={TEXT_STYLES.HeadM18}>{subject.title}</styles.Label>
      </styles.LeftDiv>
    </styles.Container>
  );
};

export default SubjectTitle;
