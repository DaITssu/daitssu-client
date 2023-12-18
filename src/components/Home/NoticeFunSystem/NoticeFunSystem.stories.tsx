import React from 'react';
import { Story } from '@storybook/react';
import NoticeFunSystem, { NoticeFunSystemProps } from './NoticeFunSystem';

export default {
  title: 'Home/NoticeFunSystem',
  component: NoticeFunSystem,
};

const Template: Story<NoticeFunSystemProps> = (args) => (
  <NoticeFunSystem {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: '공지사항 혹은 펀시스템',
  summaries: [
    {
      id: 1,
      title: '2023-1학기(여름계절제수업 포함) 성적처리~~~~~~~~~~~~~~~~~~~~~~~',
      category: 'Notice',
      createdAt: '5/11',
      views: 10,
    },
    {
      id: 2,
      title: '두 번째 공지 내용',
      category: 'Notice',
      createdAt: '5/12',
      views: 5,
    },
    {
      id: 3,
      title: '세 번째 공지 내용',
      category: 'Notice',
      createdAt: '5/13',
      views: 8,
    },
  ],
};
