import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

export const BottomPopUp = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: ${COLORS.SSU.secondary};
  width: 358px;
  height: 23px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 15px;
`;
