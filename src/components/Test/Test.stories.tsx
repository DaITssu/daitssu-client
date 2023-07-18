import type { Meta, StoryObj } from '@storybook/react';

import Test from './Test';

const meta: Meta<typeof Test> = {
  title: 'Test',
  component: Test,
};

export default meta;
type Story = StoryObj<typeof Test>;

export const SubjectContentsExample: Story = {
  args: {
    label: 'test',
  },
};
