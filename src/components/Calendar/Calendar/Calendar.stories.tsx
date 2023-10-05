import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';

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
    dayTasks: {
      3: ['#ffaa00', '#ff0000', '#ffaa00', '#ffaa00'],
      5: ['#ffaa00', '#ff0000'],
      14: ['#ffaa00', '#ff0000'],
    },
  },
};
