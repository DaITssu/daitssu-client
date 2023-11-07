import React from 'react';
import { Story } from '@storybook/react';
import NoticeFunSystemTab from './NoticeFunSystemTab';

export default {
  title: 'Home/NoticeFunSystemTab',
  component: NoticeFunSystemTab,
};

const Template: Story = (args) => <NoticeFunSystemTab {...args} />;

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
  ],
}