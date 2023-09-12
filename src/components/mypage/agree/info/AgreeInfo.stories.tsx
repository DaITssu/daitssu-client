import type { Meta, StoryObj } from '@storybook/react';
import Agree from './AgreeInfo';

const meta: Meta<typeof Agree> = {
  title: 'Agree',
  component: Agree,
};

export default meta;
type Story = StoryObj<typeof Agree>;

export const Primary: Story = {};
