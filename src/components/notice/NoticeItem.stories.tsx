import type { Story } from '@storybook/react';
import React from 'react';
import NoticeItem, { NoticeItemProps } from './NoticeItem';

export default {
  title: 'Notice-Funsystem/NoticeItem',
  component: NoticeItem,
};

const Template: Story<NoticeItemProps> = (args) => <NoticeItem item={args} />;

export const Default = Template.bind({});

Default.args = {
  bundle: 'Some Bundle',
  title: 'Example Notice Title',
  views: 12345,
  date: '2023-08-09',
} as unknown as NoticeItemProps;
