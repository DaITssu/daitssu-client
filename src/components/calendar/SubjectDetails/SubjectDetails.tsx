import Image from 'next/image';
import * as styles from './SubjectDetails.style';
import video from '../../../assets/calendar/video.svg';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';
import { COLORS } from '../../../styles/constants/colors';
import { SubjectProps } from '@/types/Subject';

const SubjectDetails = ({ subject }: SubjectProps) => {
  return (
    <styles.Container>
      <styles.LeftDiv>
        <styles.ColorDiv color={subject.color} />
        <styles.Label style={TEXT_STYLES.HeadM18}>{subject.title}</styles.Label>
      </styles.LeftDiv>
    </styles.Container>
  );
};

export default SubjectDetails;
