import type { Meta, StoryObj } from '@storybook/react';

import DateList from './DateList';

const meta: Meta<typeof DateList> = {
  title: 'Calendar',
  component: DateList,
};

export default meta;
type Story = StoryObj<typeof DateList>;

export const DateListExmaple: Story = {
  args: {
    subjectList: [
      {
        id: 1,
        title: '웹프로그래밍',
        color: '#FF7171',
        tasks: [
          {
            id: 1,
            title: '1차 과제',
            dueDate: '2022-10-10T09:00:00.000Z',
            isFinished: false,
            type: 'assignment',
          },
          {
            id: 1,
            title: '12주차 동영상',
            dueDate: '2022-10-10T09:00:00.000Z',
            isFinished: true,
            type: 'video',
          },
        ],
      },
      {
        id: 4,
        title: '컴파일러',
        color: '#FF8DC4',
        tasks: [
          {
            id: 7,
            title: '6차 과제',
            dueDate: '2022-10-10T09:00:00.000Z',
            isFinished: true,
            type: 'assignment',
          },
          {
            id: 6,
            title: '12주차 동영상',
            dueDate: '2022-10-10T17:00:00.000Z',
            isFinished: false,
            type: 'video',
          },
        ],
      },
    ],
  },
};
