import type { Meta, StoryObj } from '@storybook/react';

import Subject from './Subject';

const meta: Meta<typeof Subject> = {
  title: 'Calendar/Subject',
  component: Subject,
};

export default meta;
type Story = StoryObj<typeof Subject>;

export const SubjectExample: Story = {
  args: {
    subject: {
      id: 1,
      title: '웹프로그래밍',
      color: '#FF7171',
      tasks: [
        {
          id: 1,
          title: 'test',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        },
        {
          id: 1,
          title: 'test',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        },
      ],
    },
  },
};
