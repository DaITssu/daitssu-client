import type { Meta, StoryObj } from '@storybook/react';

import SubscribeList from './SubscribeList';

const meta: Meta<typeof SubscribeList> = {
  title: 'mypage/SubscribeList',
  component: SubscribeList,
};

export default meta;
type Story = StoryObj<typeof SubscribeList>;

export const SubscribeListExample: Story = {
  args: {
    name: '김민수',
    studentId: '2019101234',
    department: '컴퓨터공학과',
    notice: ['학사', '장학'],
    funsystem: [],
    departmentList: ['컴퓨터학부', '글로벌미디어학부'],
  },
};
