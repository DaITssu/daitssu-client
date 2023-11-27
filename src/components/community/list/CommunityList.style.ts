import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const CommunityListBox = styled.div
`
position : relative;
width: 100%;
height:100vh;
overflow : auto;
left:0px;
-ms-overflow-style: none;
scrollbar-width: none;
::-webkit-scrollbar {
  display: none;
}
background: ${COLORS.grayscale.white};
`;

export const PlusButton = styled.img`
  position: fixed; 
  width: 80px;
  height: 80px;
  bottom: 20px; 
  right: 20px; 
`;

export const TagList = styled.div
`
  box-sizing: border-box;
  display : flex;
  align-items : center;
  gap :12px;
  padding-left: 16px;
  position: relative;
  width: 100%;
  height: 59px;
  left: 0px;

  background: ${COLORS.grayscale.white};
  border-bottom: 1px solid ${COLORS.grayscale.Gray3};
  margin : 0 auto;
  justify-content: center;
`;

export const TagButton = styled.button
`
  flex: none;
  display: inline-flex;
  align-items: center; 
  box-sizing: border-box;
  white-space: nowrap;
  text-align: left;
  padding: 0px 13px; /* 좌우 여백 조정 */
  background: ${COLORS.grayscale.white};
  border: 1px solid ${COLORS.SSU.primary};
  border-radius: 20px;

  height: 36px;

  color: ${COLORS.SSU.primary};
  ${TEXT_STYLES.CapM14};


`;