import type { Meta, StoryObj } from '@storybook/react';
import TwoTypeTab from './TwoTypeTab';

const meta: Meta<typeof TwoTypeTab> = {
  title: 'TwoTypeTab',
  component: TwoTypeTab,
};

export default meta;
type Story = StoryObj<typeof TwoTypeTab>;

export const Primary: Story = {
  args: {
    LeftTitle: '공지사항',
    LeftComponent: '',
    RightTitle: '펀시스템',
    RightComponent: '',
  },
};
