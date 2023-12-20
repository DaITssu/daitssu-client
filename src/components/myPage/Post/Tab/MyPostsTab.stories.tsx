import React from 'react';
import { Story } from '@storybook/react';
import MyPostsTab from './MyPostsTab';

export default {
  title: 'MyPage/PostsTab',
  component: MyPostsTab,
};

const Template: Story = (args) => <MyPostsTab {...args} />;

export const Default = Template.bind({});