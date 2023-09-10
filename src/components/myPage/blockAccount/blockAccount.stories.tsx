// BlockAccount.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import BlockAccount from './BlockAccount';

export default {
  title: 'BlockAccount',
  component: BlockAccount,
} as Meta;

const Template: Story = (args) => <BlockAccount {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   // 여기에 필요한 props를 추가할 수 있습니다.
// };
