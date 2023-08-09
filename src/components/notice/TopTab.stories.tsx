import React from 'react';
import { Story } from '@storybook/react';
import TopTab from './TopTab';

export default {
  title: 'Notice-Funsystem/TopTab',
  component: TopTab,
};

const Template: Story = (args) => <TopTab {...args} />;

export const Default = Template.bind({});