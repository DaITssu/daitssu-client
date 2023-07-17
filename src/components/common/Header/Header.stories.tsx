import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const metaHeader: Meta<typeof Header> = {
  title: 'Test',
  component: Header,
};

export default metaHeader;
type Story = StoryObj<typeof Header>;

export const PrimaryHeader: Story = {
  args: {
    label: 'Header',
  },
};
