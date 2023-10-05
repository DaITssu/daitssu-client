import styled from '@emotion/styled';

export const NoticeListBox = styled.div`
  width: 100%;
  height: 486px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  
`;

export const NoticeListBoxShort = styled.div`
  width: 100%;
  height: 486px;
  overflow: auto;
  left : 0px;
  top: 208px;
  position : absolute;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding : 12px;
  box-sizing : border-box;
`;
