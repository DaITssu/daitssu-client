import type {  Story } from '@storybook/react';
import React from 'react';
import ServiceNoticeItem, {ServiceNoticeItemProps} from './ServiceNoticeItem';

export default {
  title: 'MyPage/ServiceItem',
  component: ServiceNoticeItem,
};

const Template: Story<ServiceNoticeItemProps> = (args: ServiceNoticeItemProps) => (
  <ServiceNoticeItem item={args} />
);

export const Default = Template.bind({});

Default.args = {
  bundle: 'Some Bundle',
  title: 'Example Notice Title',
  views: 12345,
  date: '23/05/11',
} as ServiceNoticeItemProps;