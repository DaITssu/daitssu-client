import React from 'react';
import { Story } from '@storybook/react';
import NoticeFunSystem, {NoticeFunSystemProps} from './NoticeFunSystem';

export default {
  title: 'Home/NoticeFunSystem',
  component: NoticeFunSystem,
};

const summaries = [
  {
    textContent: '2023-1학기(여름계절제수업 포함) 성적처리~~~~~~~~~~~~~~~~~~~~~~~',
    date: '5/11',
  },
  {
    textContent: '두 번째 공지 내용',
    date: '5/12',
  },
  {
    textContent: '세 번째 공지 내용',
    date: '5/13',
  },
];

const Template: Story<NoticeFunSystemProps> = (args) => <NoticeFunSystem {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: '공지사항 혹은 펀시스템',
  summaries: summaries,
};