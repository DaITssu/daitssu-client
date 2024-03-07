import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';
import { CalendarType } from '../CalendarScreen/CalendarScreen';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const CalendarExample: Story = {
  args: {
    year: 2023,
    month: 8,
    selectDay: 23,
    dayTasks: [
      {
        course: 'course',
        calendarResponses: [
          {
            id: 1,
            type: CalendarType.ASSIGNMENT,
            name: 'title',
            dueAt: '2023-08-23',
            isCompleted: false,
          },
        ],
      },
    ],
  },
};
