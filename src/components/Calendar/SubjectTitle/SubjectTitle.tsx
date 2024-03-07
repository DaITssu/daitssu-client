import * as styles from './SubjectTitle.style';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';
import { SubjectProps } from '@/types/Subject';

const SubjectTitle = ({ title }: { title: string }) => {
  return (
    <styles.Container>
      <styles.LeftDiv>
        <styles.ColorDiv color={'#FF717171'} />
        <styles.Label style={TEXT_STYLES.HeadM18}>{title}</styles.Label>
      </styles.LeftDiv>
    </styles.Container>
  );
};

export default SubjectTitle;
