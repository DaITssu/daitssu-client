import React from 'react';
import { Story } from '@storybook/react';
import NoticeList from './NoticeList';
import { NoticeItemProps } from './NoticeItem';

export default {
  title: 'Notice-Funsystem/NoticeList',
  component: NoticeList,
};

const Template: Story<{ items: NoticeItemProps[] }> = (args) => (
  <NoticeList category="" search="" {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      id: 1,
      category: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      createdAt: '24/05/11',
    },
    {
      id: 2,
      title: '학습역량 아무말 신청합니다~~~~~~~~~!!!!!!!!!!!!!!!!!',
      views: 1123123,
      category: '학사',
      createdAt: '24/05/11',
    },
    {
      id: 3,
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      category: '학사',
      createdAt: '24/05/11',
    },
    {
      id: 4,
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      category: '학사',
      createdAt: '24/05/11',
    },
    {
      id: 5,
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      category: '학사',
      createdAt: '24/05/11',
    },
    {
      id: 6,
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      category: '학사',
      createdAt: '24/05/11',
    },
    {
      id: 7,
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      category: '학사',
      createdAt: '24/05/11',
    },
  ],
};
