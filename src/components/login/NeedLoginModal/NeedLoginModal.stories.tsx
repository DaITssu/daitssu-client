import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NeedLoginModal from './NeedLoginModal';
import Modal from '@/components/common/Modal';
import useModal from '@/components/common/Modal/useModal';

const meta: Meta<typeof NeedLoginModal> = {
  title: 'NeedLoginModal',
  component: NeedLoginModal,
};

export default meta;
type Story = StoryObj<typeof NeedLoginModal>;

export const Primary: Story = () => {
  const { open, PopUp, close } = useModal();

  return (
    <div>
      <button onClick={open}>Open Modal</button>
      <PopUp>
        <Modal onClose={close} title={''}>
          <NeedLoginModal />
        </Modal>
      </PopUp>
    </div>
  );
};

Primary.args = {};
