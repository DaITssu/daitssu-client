import React from 'react';
import { Story } from '@storybook/react';
import MyPost from './MyPost';

export default {
  title: 'MyPage/Post',
  component: MyPost,
};

const Template: Story = (args) => <MyPost {...args} />;

export const Default = Template.bind({});
