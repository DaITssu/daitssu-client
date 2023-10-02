import React from 'react';
import { Story } from '@storybook/react';
import TosItem from './TosItem';

export default {
  title: 'register/TosItem',
  component: TosItem,
};

const Template: Story = (args) => (
  <TosItem
    onCheckboxClick={() => {}}
    text={' 다잇슈 이용약관'}
    onArrowClick={() => {}}
    isChecked={false}
    {...args}
  />
);

export const Default = Template.bind({});
