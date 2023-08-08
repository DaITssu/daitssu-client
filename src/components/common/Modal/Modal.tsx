import React, { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import CloseSVG from '@icons/icon/Icon18/Close.svg';

import * as styles from './Modal.styles';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ title, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClickModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <styles.overlayStyle ref={modalRef} onClick={handleClickModal}>
      <styles.modalStyle>
        <styles.modalHeaderStyles>
          <styles.titleStyles>{title}</styles.titleStyles>
          <div onClick={onClose}>
            <Image src={CloseSVG} alt="close" width={18} height={18} />
          </div>
        </styles.modalHeaderStyles>
        {children}
      </styles.modalStyle>
    </styles.overlayStyle>
  );
};

export default Modal;
