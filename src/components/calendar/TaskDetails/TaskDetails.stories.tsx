import type { Meta, StoryObj } from '@storybook/react';
import { TaskDTO } from '@/types/Task';

import TaskDetails from './TaskDetails';

const meta: Meta<typeof TaskDetails> = {
  title: 'Calendar',
  component: TaskDetails,
};

export default meta;
type Story = StoryObj<typeof TaskDetails>;

export const TaskDetailsExample: Story = {
  args: {
    task: {
      id: 1,
      title: 'test',
      dueDate: '2022-10-10T09:00:00.000Z',
      isFinished: false,
      type: 'test',
    },
  },
};
