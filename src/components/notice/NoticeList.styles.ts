import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

export const NoticeListBoxShort = styled.div`
  width: 100%;
  height: 69vh;
  position: static;
  overflow: auto;
  left: 0px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: -1;
  padding: 12px;
  box-sizing: border-box;
  background: ${COLORS.grayscale.white};
`;
