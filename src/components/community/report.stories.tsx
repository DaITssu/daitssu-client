import type { Meta, StoryObj } from '@storybook/react';

import Report from './report';

const meta: Meta<typeof Report> = {
  title: 'Report',
  component: Report,
};

export default meta;
type Story = StoryObj<typeof Report>;

export const Default: Story = {
  args: {},
};
