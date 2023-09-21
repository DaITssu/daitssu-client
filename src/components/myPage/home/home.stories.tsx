import type { Meta, StoryObj } from '@storybook/react';

import home from './home';

const meta: Meta<typeof home> = {
  title: 'mypage/home',
  component: home,
};

export default meta;
type Story = StoryObj<typeof home>;

export const HomeExample: Story = {
  args: {
    name: '김민수',
    studentId: '2019101234',
    department: '컴퓨터공학과',
  },
};
