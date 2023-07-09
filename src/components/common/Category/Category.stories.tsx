import type { Meta, StoryObj } from '@storybook/react';

import Category from './Category';

const meta: Meta<typeof Category> = {
  title: 'Category',
  component: Category,
};

export default meta;
type Story = StoryObj<typeof Category>;

export const BgColor: Story = {
  args: {
    label: '전체',
    BgColor: true,
  },
};
