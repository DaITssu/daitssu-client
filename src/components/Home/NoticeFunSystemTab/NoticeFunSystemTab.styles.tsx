import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import {COLORS} from '@/styles/constants/colors';

interface TabFontBoxProp {
  isSelected: boolean;
}

export const TabFontBox = styled.div<TabFontBoxProp>`
  font-style: normal;
  line-height: 210%;
  text-align: center;
  position: relative;
  width: 33.33%;
  height: 36px;
  display: inline-block;
  color: ${(props) => (props.isSelected ? COLORS.SSU.primary : COLORS.grayscale.Black)};
  border-bottom: 2px solid ${(props) => (props.isSelected ? COLORS.SSU.primary : COLORS.grayscale.Gray3)};
`;

export const TabBox = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 164px;
  padding-top : 4px;
  ${TEXT_STYLES.BodyR16};
`;
