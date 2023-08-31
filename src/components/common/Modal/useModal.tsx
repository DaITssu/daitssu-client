import { ReactNode, useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const PopUp = ({ children }: { children: ReactNode }) => {
    return isOpen ? children : null;
  };

  return { open, close, PopUp };
};

export default useModal;
