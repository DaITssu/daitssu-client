import type { Meta, StoryObj } from '@storybook/react';

import SubjectList from './SubjectList';
import { CalendarType } from '../CalendarScreen/CalendarScreen';

const meta: Meta<typeof SubjectList> = {
  title: 'Calendar/SubjectList',
  component: SubjectList,
};

export default meta;
type Story = StoryObj<typeof SubjectList>;

export const SubjectListExample: Story = {
  args: {
    subjectList: [
      {
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
    ],
  },
};
