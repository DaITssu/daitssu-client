import Image from 'next/image';
import * as styles from './TaskDetails.style';
import video from '../../../assets/calendar/video.svg';
import comment from '../../../assets/calendar/comment.svg';
import assignment from '../../../assets/calendar/assignment.svg';
import { TaskDTO, TaskProps } from '@/types/Task';
import Status from '../../common/Status/index';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';
import { COLORS } from '../../../styles/constants/colors';

const getTaskStatus = (dueDate: Date, task: TaskDTO) => {
  if (task.isFinished) return 1;
  return Date.now() > dueDate.getTime() ? 2 : 0;
};

const TaskDetails = ({ task }: TaskProps) => {
  const date = new Date(task.dueDate);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const statusNumber = getTaskStatus(date, task);
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

export default TaskDetails;
