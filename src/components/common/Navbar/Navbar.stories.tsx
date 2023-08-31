import type { Meta, StoryObj } from '@storybook/react';

import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'NavigationBar',
  component: NavigationBar,
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Home: Story = {
  args: {
    focusType: 'HOME',
  },
};

export const Community: Story = {
  args: {
    focusType: 'COMMUNITY',
  },
};
export const Announcement: Story = {
  args: {
    focusType: 'ANNOUNCEMENT',
  },
};
export const Calendar: Story = {
  args: {
    focusType: 'CALENDAR',
  },
};
export const My: Story = {
  args: {
    focusType: 'MY_PAGE',
  },
};
