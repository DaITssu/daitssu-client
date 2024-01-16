import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderExample: Story = () => {
  return <Loader></Loader>;
};

LoaderExample.args = {};
