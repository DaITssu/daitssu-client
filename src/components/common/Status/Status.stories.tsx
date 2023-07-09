import type { Meta, StoryObj } from '@storybook/react';

import Status from './Status';

const meta: Meta<typeof Status> = {
  title: 'Status',
  component: Status,
};

export default meta;
type Story = StoryObj<typeof Status>;

export const isIncomplete: Story = {
  args: {
    label: '미완료',
    status: 0,
  },
};

export const isComplete: Story = {
  args: {
    label: '완료',
    status: 1,
  },
};

export const Timeout: Story = {
  args: {
    label: '시간 초과',
    status: 2,
  },
};
