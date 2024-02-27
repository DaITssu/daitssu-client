import React from 'react';
import { Story } from '@storybook/react';
import TopTab from './TopTab';

export default {
  title: 'Notice-Funsystem/TopTab',
  component: TopTab,
};

const Template: Story = (args) => <TopTab type="공지사항" {...args} />;

export const Default = Template.bind({});
