import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

interface TabFontBoxProps {
  isSelected: boolean;
}

export const TabContentBox = styled.div`
  background: ${COLORS.grayscale.white};
`;

export const TabFontBox = styled.div<TabFontBoxProps>`
  ${TEXT_STYLES.BodyM16};
  text-align: center;
  color: ${COLORS.grayscale.Black};
  position: relative;
  width: 71px;
  height: 36px;
  display: inline-block;
  padding-top: 5px;
  border-bottom: 2px solid
    ${(props) =>
      props.isSelected ? `${COLORS.SSU.primary}` : `${COLORS.grayscale.Gray3}`};
`;

export const Rectangle242 = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 36px;
  left: 0px;
  border-bottom: 2px solid ${COLORS.grayscale.Gray3};
  padding-left: 16px;
  background: ${COLORS.grayscale.white};
`;
