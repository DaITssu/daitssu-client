import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ToggleButton from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Button',
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const ToggleButtonExample: Story = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onToggle = () => {
    setIsToggle(!isToggle);
    console.log(`isToggle: ${isToggle}`);
  };

  return <ToggleButton isToggle={isToggle} onToggle={onToggle} />;
};

ToggleButtonExample.args = {
  isToggle: false,
};
