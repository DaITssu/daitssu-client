import type { Meta, StoryObj } from '@storybook/react';
import ScrapList from './ScrapList';

const meta: Meta<typeof ScrapList> = {
  title: 'ScrapList',
  component: ScrapList,
};

export default meta;
type Story = StoryObj<typeof ScrapList>;

export const Primary: Story = {};
