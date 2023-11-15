import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

export const NoticeListBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background : ${COLORS.grayscale.white};
`;

export const NoticeListBoxShort = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  left : 0px;
  position : absolute;
  top : 213px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index : -1;
  padding : 12px;
  box-sizing : border-box;
  background : ${COLORS.grayscale.white};
`;
