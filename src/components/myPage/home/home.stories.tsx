import type { Meta, StoryObj } from '@storybook/react';

import MyPageComponent from './home';

const meta: Meta<typeof MyPageComponent> = {
  title: 'mypage/home',
  component: MyPageComponent,
};

export default meta;
type Story = StoryObj<typeof MyPageComponent>;

export const HomeExample: Story = {
  args: {
    name: '김민수',
    studentId: '2019101234',
    department: '컴퓨터공학과',
  },
};
