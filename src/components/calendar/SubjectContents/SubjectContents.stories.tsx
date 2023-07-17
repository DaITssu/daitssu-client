import type { Meta, StoryObj } from '@storybook/react';

import SubjectContents from './SubjectContents';

const meta: Meta<typeof SubjectContents> = {
  title: 'Calendar',
  component: SubjectContents,
};

export default meta;
type Story = StoryObj<typeof SubjectContents>;

export const SubjectContentsExample: Story = {
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
