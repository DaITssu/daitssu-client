import type { Meta, StoryObj } from '@storybook/react';

import SubjectTitle from './SubjectTitle';

const meta: Meta<typeof SubjectTitle> = {
  title: 'Calendar/SubjectTitle',
  component: SubjectTitle,
};

export default meta;
type Story = StoryObj<typeof SubjectTitle>;

export const SubjectTitleExamples: Story = {
  args: { title: '웹프로그래밍' },
};
