import type { Meta, StoryObj } from '@storybook/react';

import UtilityHeader, { UtilityHeaderProps } from './UtilityHeader';

const meta: Meta<typeof UtilityHeader> = {
  title: 'UtilityHeader',
  component: UtilityHeader,
};

export default meta;
type Story = StoryObj<typeof UtilityHeader>;

export const Default: Story = (args: UtilityHeaderProps) => (
  <UtilityHeader {...args} />
);
Default.args = {
  child: '헤더 이름',
};

export const DeleteBtn: Story = (args: UtilityHeaderProps) => (
  <UtilityHeader {...args} />
);
DeleteBtn.args = {
  child: '삭제 버튼 활성화 시',
  isDeleteBtn: true,
};

export const ConfirmBtn: Story = (args: UtilityHeaderProps) => (
  <UtilityHeader {...args} />
);
ConfirmBtn.args = {
  child: '확인 버튼 활성화 시',
  isConfirmBtn: true,
};

export const CommunityBtn: Story = (args: UtilityHeaderProps) => (
  <UtilityHeader {...args} />
);

CommunityBtn.args = {
  child: '커뮤니티',
  isCommunity: true,
};
