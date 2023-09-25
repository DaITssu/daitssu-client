import type { Meta, StoryObj } from '@storybook/react';

import SelectButton from './SelectButton';

const meta: Meta<typeof SelectButton> = {
  title: 'SelectButton',
  component: SelectButton,
};

export default meta;
type Story = StoryObj<typeof SelectButton>;

export const Default: Story = {
  // args: {
  //   label: '완료',
  //   width: 358,
  //   height: 56,
  // },
};
