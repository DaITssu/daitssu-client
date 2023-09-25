import type { Meta, StoryObj } from '@storybook/react';

import BottomPopUp from './BottomPopUp';

const meta: Meta<typeof BottomPopUp> = {
  title: 'ButtomPopUp',
  component: BottomPopUp,
};

export default meta;
type Story = StoryObj<typeof BottomPopUp>;

export const Primary: Story = {
  args: {
    label: '신고가 완료되었습니다.',
  },
};
