import styled from '@emotion/styled';

import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const overlayStyle = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: -${typeof window !== 'undefined' ? window.scrollY : 0}px;
  overflow-y: scroll;
  width: 100%;
  right: 0;
  bottom: 0;
  z-index: 998;
`;

export const modalHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const titleStyles = styled.p`
  ${TEXT_STYLES.HeadM20};
`;

export const closeButtonStyles = styled.div`
  cursor: pointer;
`;

export const modalStyle = styled.div`
  background-color: white;
  padding: 1rem;
  min-width: 280px;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
