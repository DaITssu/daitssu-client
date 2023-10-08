import type { Meta, StoryObj } from '@storybook/react';

import HomeScreen from './homescreen';

const meta: Meta<typeof HomeScreen> = {
  title: 'Home/homescreen',
  component: HomeScreen,
};

export default meta;
type Story = StoryObj<typeof HomeScreen>;

export const HomeExample: Story = {
  args: {
    popularPosts: [
      {
        id: 142,
        title: 'hello',
        content: 'helloworld',
        type: 'info',
        commentCount: 14,
        createdAt: '2020-09-20',
      },
      {
        id: 146,
        title: 'hello',
        content: 'helloworld',
        type: 'info',
        commentCount: 14,
        createdAt: '2020-09-20',
      },
      {
        id: 141,
        title: 'hello',
        content: 'helloworld',
        type: 'info',
        commentCount: 14,
        createdAt: '2020-09-20',
      },
    ],
    notice: [
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
    ],
    funsystem: [
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
      { textContent: '2023년 1학기 성적처리', date: '20193010' },
    ],
  },
};
