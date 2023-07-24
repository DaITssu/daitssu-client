import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';

export const BottomPopUp = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${COLORS.SSU.secondary};
  width: 358px;
  height: 53px;
  padding-left: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 15px;
`;
