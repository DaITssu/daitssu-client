import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EditEventModal from './EditEventModal';
import Modal from '@/components/common/Modal';
import useModal from '@/components/common/Modal/useModal';

const meta: Meta<typeof EditEventModal> = {
  title: 'Calendar/EditEventModal',
  component: EditEventModal,
};

export default meta;
type Story = StoryObj<typeof EditEventModal>;

export const EditEventModalExample: Story = () => {
  const { open, PopUp, close } = useModal();

  const [isCreate, setIsCreate] = useState(false);

  return (
    <div>
      <button onClick={() => setIsCreate(!isCreate)}>
        {isCreate ? '일정 추가' : '일정 수정'}
      </button>
      <button onClick={open}>Open Modal</button>
      <PopUp>
        {isCreate ? (
          <Modal onClose={close} title="일정 추가하기">
            <EditEventModal onClose={close} />
          </Modal>
        ) : (
          <Modal onClose={close} title="일정 수정하기">
            <EditEventModal
              event={{
                type: 'Meeting',
                title: 'Team Sync-up',
                closeTime: new Date(),
                isFinished: false,
              }}
              onClose={close}
            />
          </Modal>
        )}
      </PopUp>
    </div>
  );
};

EditEventModalExample.args = {};
