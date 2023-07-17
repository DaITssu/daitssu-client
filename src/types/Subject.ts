import { TaskDTO } from './Task';

export interface SubjectDTO {
  id: number;
  title: string;
  color: string;
  tasks: TaskDTO[];
}

export interface SubjectProps {
  subject: SubjectDTO;
}

export const SubjectDTOExample: SubjectDTO = {
  id: 1,
  title: '웹프로그래밍실습',
  color: '#FF0000',
  tasks: [
    {
      id: 1,
      title: '과제1',
      dueDate: '2021-10-01',
      isFinished: false,
      type: 'assignment',
    },
    {
      id: 2,
      title: '과제2',
      dueDate: '2021-10-02',
      isFinished: false,
      type: 'assignment',
    },
  ],
};
