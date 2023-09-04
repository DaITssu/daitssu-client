import type { Meta, StoryObj } from '@storybook/react';
import NoticeInfo from './NoticeInfo';

const meta: Meta<typeof NoticeInfo> = {
  title: 'NoticeInfo',
  component: NoticeInfo,
};

export default meta;
type Story = StoryObj<typeof NoticeInfo>;

export const Primary: Story = {};
