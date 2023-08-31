export interface TaskDTO {
  id: number;
  title: string;
  dueDate: string;
  isFinished: boolean;
  type: string;
}

export interface TaskProps {
  task: TaskDTO;
}
