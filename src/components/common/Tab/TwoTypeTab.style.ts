import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

interface TabFontBoxProps {
  isSelected: boolean;
}

export const TabFontBox = styled.div<TabFontBoxProps>`
  line-height: 210%;
  text-align: center;
  width: 50%;
  height: 36px;
  display: inline-block;
  color: ${(props) =>
    props.isSelected ? `${COLORS.SSU.primary}` : `${COLORS.grayscale.Black}`};
  border-bottom: 2px solid
    ${(props) =>
      props.isSelected ? `${COLORS.SSU.primary}` : `${COLORS.grayscale.Gray3}`};
  ${TEXT_STYLES.BodyM16};
`;

export const TabBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-top: 4px;
  ${TEXT_STYLES.BodyR16};
`;

export const TabContents = styled.div``;
