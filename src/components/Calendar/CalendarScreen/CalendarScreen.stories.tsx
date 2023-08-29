import type { Meta, StoryObj } from '@storybook/react';

import CalendarScreen from './CalendarScreen';

const meta: Meta<typeof CalendarScreen> = {
  title: 'Calendar',
  component: CalendarScreen,
};

export default meta;
type Story = StoryObj<typeof CalendarScreen>;

export const CalendarScreenExample: Story = {
  args: {
    year: 2023,
    month: 8,
    selectDay: 23,
    dayTasks: {
      3: ['#ffaa00', '#ff0000', '#ffaa00', '#ffaa00'],
      5: ['#ffaa00', '#ff0000'],
      14: ['#ffaa00', '#ff0000'],
    },
    onDayClick: (day: number) => {
      console.log(day);
    },
  },
};
