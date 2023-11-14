
import React from 'react';
import { Story } from '@storybook/react';
import NoticeList from './NoticeList';
import { NoticeItemProps } from './NoticeItem';

export default {
  title: 'Notice-Funsystem/NoticeList',
  component: NoticeList,
}

const Template: Story<{ items: NoticeItemProps[] }> = (args) => <NoticeList {...args} />;

export const Default = Template.bind({});

Default.args= {
  items:[
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학습역량',
      title: '학습역량 아무말 신청합니다~~~~~~~~~!!!!!!!!!!!!!!!!!',
      views: 1123123,
      date: '23/06/19',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
  ]
}