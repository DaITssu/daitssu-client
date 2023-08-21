import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import useModal from './useModal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalExample: Story = () => {
  const { open, PopUp, close } = useModal();

  return (
    <div>
      <button onClick={open}>Open Modal</button>
      <PopUp>
        <Modal onClose={close} title="This is Title">
          <div>MODAL_EXAMPLE</div>
        </Modal>
      </PopUp>
    </div>
  );
};

ModalExample.args = {};
