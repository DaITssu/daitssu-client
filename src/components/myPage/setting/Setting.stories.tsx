// Setting.stories.tsx
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Setting from './Setting';

// 메타 정보 설정
const meta: Meta = {
  title: 'Setting',
  component: Setting,
};

export default meta;

// Story 정의
const Template: Story = (args) => <Setting {...args} />;

// 스토리 생성
export const Default: Story = Template.bind({});
// Default.args = {
//   // props를 여기에 정의합니다. 예를 들면, someProp: 'someValue',
// };
