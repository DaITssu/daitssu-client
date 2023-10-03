import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

interface TabFontBoxProps {
  isSelected: boolean;
}

export const TabFontBox = styled.div<TabFontBoxProps>`
  ${TEXT_STYLES.BodyM16};
  text-align: center;
  color: ${COLORS.grayscale.Black};
  position: relative;
  width: 71px;
  height: 34px;
  display: inline-block;
  padding-top: 5px;
  /* Apply different styles based on isSelected prop */
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? '#5EBEEB' : '#D9D9D9')};
`;

export const Rectangle242 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 390px;
  height: 36px;
  left: 0px;
  top: 60px;
  /* gray 3 */
  border-bottom: 2px solid #d9d9d9;
  padding-left: 16px;
`;
