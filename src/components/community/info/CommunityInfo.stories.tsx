import type { Meta, StoryObj } from '@storybook/react';
import CommunityInfo from './CommunityInfo';

const meta: Meta<typeof CommunityInfo> = {
  title: 'CommunityInfo',
  component: CommunityInfo,
};

export default meta;
type Story = StoryObj<typeof CommunityInfo>;

export const Primary: Story = {};
