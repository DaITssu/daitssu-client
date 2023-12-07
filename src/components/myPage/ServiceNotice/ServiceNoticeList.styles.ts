
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

export const NoticeListBox = styled.div
`
padding : 10px;
width : 100%;
height : 100%;
overflow : auto;
-ms-overflow-style : none;
scrollbar-width : none;
::-webkit-scrollbar{
  display:none;
}
left : 0;
background : ${COLORS.grayscale.white};
`;
