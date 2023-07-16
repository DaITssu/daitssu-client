import Image from 'next/image';
import * as styles from './TaskDetails.style';
import video from '../../../assets/calendar/video.svg';
import { TaskDetailsProps } from '@/types/Task';

const TaskDetails = ({ task }: TaskDetailsProps) => {
  const date = new Date(task.dueDate);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <styles.Container>
      <styles.LeftDiv>
        <Image priority src={video} alt="video" width={24} height={24} />
        <styles.Titles>
          <styles.Title>{task.title}</styles.Title>
          <styles.dateLabel>{time + '까지'}</styles.dateLabel>
        </styles.Titles>
      </styles.LeftDiv>

      <styles.finishButton>
        {task.isFinished ? '완료' : '미완료'}
      </styles.finishButton>
    </styles.Container>
  );
};

export default TaskDetails;
