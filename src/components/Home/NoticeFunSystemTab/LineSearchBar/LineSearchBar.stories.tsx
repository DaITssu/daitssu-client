import type { Meta, StoryObj } from '@storybook/react';

import LineSearchBar from './LineSearchBar';

const meta: Meta<typeof LineSearchBar> = {
  title: 'LineSearchBar',
  component: LineSearchBar,
};

export default meta;
type Story = StoryObj<typeof LineSearchBar>;

export const Primary: Story = {
  // args: {
  //   label: '완료',
  //   width: 358,
  //   height: 56,
  // },
};
