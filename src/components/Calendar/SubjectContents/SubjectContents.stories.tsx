import type { Meta, StoryObj } from '@storybook/react';

import SubjectContents from './SubjectContents';
import { CalendarType } from '../CalendarScreen/CalendarScreen';

const meta: Meta<typeof SubjectContents> = {
  title: 'Calendar/SubjectContents',
  component: SubjectContents,
};

export default meta;
type Story = StoryObj<typeof SubjectContents>;

export const SubjectContentsExample: Story = {
  args: {
    task: {
      id: 1,
      name: 'test',
      dueAt: '2022-10-10T09:00:00.000Z',
      isCompleted: false,
      type: CalendarType.QUIZ,
    },
  },
};
