import * as styles from './TaskList.style';

interface TestProps {
  taskTitle?: string;
  dueDate?: String;
  isFinished?: boolean;
  type?: string;
}

const TaskList = ({ taskTitle: label }: TestProps) => (
  <styles.Container>
    <styles.Label>{label}</styles.Label>
  </styles.Container>
);

export default TaskList;
