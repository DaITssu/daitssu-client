import type { Meta, StoryObj } from '@storybook/react';

import EditProfile from './EditProfile';

const meta: Meta<typeof EditProfile> = {
  title: 'mypage/EditProfile',
  component: EditProfile,
};

export default meta;
type Story = StoryObj<typeof EditProfile>;

export const EditProfileExample: Story = {
  args: {
    name: '김민수',
    nickname: '닉네임',
    studentId: '2019101234',
    semester: '3학년 1학기',
    department: '컴퓨터공학과',
  },
};
