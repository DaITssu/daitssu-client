// Withdrawal.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Withdrawal, { ReportItemProps, WithdrawalItem } from './withdrawal';

const meta: Meta = {
  title: 'Withdrawal',
  component: Withdrawal,
};

export default meta;

const Template: Story = () => <Withdrawal />;

export const DefaultWithdrawal: Story = Template.bind({});
// DefaultWithdrawal.args = {
//   // 이 컴포넌트는 useState와 useEffect를 사용하므로,
//   // 초기값이나 args 설정은 이곳에서 하지 않습니다.
// };

// WithdrawalItem 스토리
const WithdrawalItemTemplate: Story<ReportItemProps> = (args) => (
  <WithdrawalItem {...args} />
);

export const DefaultWithdrawalItem: Story<ReportItemProps> =
  WithdrawalItemTemplate.bind({});
DefaultWithdrawalItem.args = {
  text: '이용하기 불편해서',
  isSelected: false,
  onClick: () => {},
};
