import type { Meta, StoryObj } from '@storybook/react';

import Subject from './Subject';
import { CalendarType } from '../CalendarScreen/CalendarScreen';

const meta: Meta<typeof Subject> = {
  title: 'Calendar/Subject',
  component: Subject,
};

export default meta;
type Story = StoryObj<typeof Subject>;

export const SubjectExample: Story = {
  args: {
    subject: {
      course: '웹프로그래밍',
      calendarResponses: [
        {
          id: 1,
          name: 'test',
          dueAt: '2022-10-10T09:00:00.000Z',
          isCompleted: false,
          type: CalendarType.QUIZ,
        },
        {
          id: 1,
          name: 'test',
          dueAt: '2022-10-10T09:00:00.000Z',
          isCompleted: false,
          type: CalendarType.QUIZ,
        },
      ],
    },
  },
};
