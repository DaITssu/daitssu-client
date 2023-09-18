import type { Meta, StoryObj } from '@storybook/react';
import AgreeInfo from './AgreeInfo';

const meta: Meta<typeof AgreeInfo> = {
  title: 'AgreeInfo',
  component: AgreeInfo,
};

export default meta;
type Story = StoryObj<typeof AgreeInfo>;

export const Primary: Story = {};
