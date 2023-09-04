import React from 'react';
import type { Meta, Story } from '@storybook/react';
import { ReportItemProps, WithdrawalItem } from './Withdrawal'; // 적절한 경로로 수정해주세요

const meta: Meta = {
  title: 'WithdrawalItem',
  component: WithdrawalItem,
};

export default meta;

const Template: Story<ReportItemProps> = (args) => <WithdrawalItem {...args} />;

export const DefaultWithdrawalItem: Story<ReportItemProps> = Template.bind({});
DefaultWithdrawalItem.args = {
  text: '이용하기 불편해서',
  isSelected: false,
  onClick: () => console.log('Clicked!'),
};
