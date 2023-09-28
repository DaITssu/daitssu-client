import type { Meta, StoryObj } from '@storybook/react';

import ConfirmRegister from './ConfirmRegister';

const meta: Meta<typeof ConfirmRegister> = {
  title: 'Login/ConfirmRegister',
  component: ConfirmRegister,
};

export default meta;
type Story = StoryObj<typeof ConfirmRegister>;

export const ConfirmRegisterExample: Story = {};
