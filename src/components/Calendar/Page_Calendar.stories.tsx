import type { Meta, StoryObj } from '@storybook/react';
import PageCalendar from './Page_Calendar';

const meta: Meta<typeof PageCalendar> = {
  title: 'PageCalendar',
  component: PageCalendar,
};

export default meta;
type Story = StoryObj<typeof PageCalendar>;

export const Primary: Story = {
  args: {
    label: '완료',
    width: 358,
    height: 56,
  },
};
