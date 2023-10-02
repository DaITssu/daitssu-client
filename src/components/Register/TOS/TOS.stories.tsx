import React from 'react';
import { Story } from '@storybook/react';
import TOS from './TOS';

export default {
  title: 'register/TOS',
  component: TOS,
};

const Template: Story = (args) => (
  <TOS
    onAgree={() => {}}
    closeModal={() => {}}
    title={'다잇슈 이용약관'}
    {...args}
  />
);

export const Default = Template.bind({});
