import type { Meta, StoryObj } from '@storybook/react';
import { TaskDTO } from '@/types/Task';

import SubjectDetails from './SubjectDetails';

const meta: Meta<typeof SubjectDetails> = {
  title: 'Calendar',
  component: SubjectDetails,
};

export default meta;
type Story = StoryObj<typeof SubjectDetails>;

export const SubjectDetailsExamples: Story = {
  args: {
    subject: {
      id: 1,
      title: '웹프로그래밍',
      color: '#FF7171',
      tasks: [],
    },
  },
};
