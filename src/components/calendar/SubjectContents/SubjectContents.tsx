import Image from 'next/image';
import * as styles from './SubjectContents.style';
import video from '@icons/icon/LectureAssignment/Video.svg';
import comment from '@icons/icon/LectureAssignment/Comment.svg';
import assignment from '@icons/icon/LectureAssignment/Assignment.svg';
import { TaskProps } from '@/types/Task';
import Status from '../../common/Status/index';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

const SubjectContents = ({ task }: TaskProps) => {
  const date = new Date(task.dueDate);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // 1 : 완료, 2 : 시간초과, 0 : 미완료
  const statusNumber = task.isFinished
    ? 1
    : Date.now() > date.getTime()
    ? 2
    : 0;

  const statusMapping = {
    0: '미완료',
    1: '완료',
    2: '시간초과',
  };
  const statusLabel = statusMapping[statusNumber] || '미완료';

  const iconMapping: { [key: string]: any } = {
    video: video,
    comment: comment,
    assignment: assignment,
  };
  const icon = iconMapping[task.type] || video;

  return (
    <styles.Container>
      <styles.LeftDiv>
        <Image priority src={icon} alt={task.type} width={24} height={24} />
        <styles.Titles>
          <styles.Label
            style={TEXT_STYLES.BodyR16}
            color={COLORS.grayscale.Gray1}
          >
            {task.title}
          </styles.Label>
          <styles.Label style={TEXT_STYLES.CapR14}>
            {time + '까지'}
          </styles.Label>
        </styles.Titles>
      </styles.LeftDiv>

      <Status label={statusLabel} status={statusNumber} />
    </styles.Container>
  );
};

export default SubjectContents;
