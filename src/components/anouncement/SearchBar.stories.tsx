import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'SearchBar',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {
  // args: {
  //   label: '완료',
  //   width: 358,
  //   height: 56,
  // },
};
