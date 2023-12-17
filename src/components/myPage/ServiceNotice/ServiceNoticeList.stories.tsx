
import React from 'react';
import { Story } from '@storybook/react';
import ServiceNoticeList from './ServiceNoticeList';
import { ServiceNoticeItemProps } from './ServiceNoticeItem';

export default {
  title: 'MyPage/ServiceList',
  component: ServiceNoticeList,
}

const Template: Story<{ items: ServiceNoticeItemProps[] }> = (args: { items: ServiceNoticeItemProps[] }) => (
  <ServiceNoticeList {...args} />
);

export const Default = Template.bind({});

Default.args= {
  items:[
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
      views: 170622,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
    {
      title: '6/23 (금) 시스템 점검 및 업데이트 안내',
      views: 1706,
      date: '23/05/11',
    },
  ]
}