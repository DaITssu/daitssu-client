import React from 'react';
import { Story } from '@storybook/react';
import Register from './Register';

export default {
  title: 'register',
  component: Register,
};

const Template: Story = (args) => <Register {...args} />;

export const Default = Template.bind({});
