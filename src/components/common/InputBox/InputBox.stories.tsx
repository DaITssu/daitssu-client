import type { Meta, StoryObj } from '@storybook/react';
import InputBox from './InputBox';

const meta: Meta<typeof InputBox> = {
  title: 'InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'number', 'password'],
    },
    setValue: {
      control: false,
    },
  },
};
export default meta;
type Story = StoryObj<typeof InputBox>;

export const Primary: Story = {
  args: {
    label: 'ID',
    width: '360px',
    height: '48px',
    placeholder: '학번',
    type: 'text',
  },
};
