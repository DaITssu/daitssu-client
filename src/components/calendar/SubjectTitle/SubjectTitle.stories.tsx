import type { Meta, StoryObj } from '@storybook/react';

import SubjectTitle from './SubjectTitle';

const meta: Meta<typeof SubjectTitle> = {
  title: 'Calendar',
  component: SubjectTitle,
};

export default meta;
type Story = StoryObj<typeof SubjectTitle>;

export const SubjectTitleExamples: Story = {
  args: {
    subject: {
      id: 1,
      title: '웹프로그래밍',
      color: '#FF7171',
      tasks: [],
    },
  },
};
