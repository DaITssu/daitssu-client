import type { Story } from '@storybook/react';
import React from 'react';
import ServiceNoticeItem, { ServiceNoticeItemProps } from './ServiceNoticeItem';

export default {
  title: 'MyPage/ServiceNoticeItem',
  component: ServiceNoticeItem,
};

const Template: Story<ServiceNoticeItemProps> = (
  args: ServiceNoticeItemProps,
) => <ServiceNoticeItem item={args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Some Bundle',
  content: 'Example Notice Title',
  createdAt: '23/05/11',
} as ServiceNoticeItemProps;
