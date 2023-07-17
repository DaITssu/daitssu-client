import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

const metaFooter: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

export default metaFooter;
type Story = StoryObj<typeof Footer>;

export const PrimaryHeader: Story = {
  args: {
    label: 'Footer',
  },
};
