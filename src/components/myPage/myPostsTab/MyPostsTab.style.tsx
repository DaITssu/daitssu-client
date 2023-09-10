import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
interface TabFontBoxProps {
  isSelected: boolean;
}

export const TabFontBox = styled.div<TabFontBoxProps>`
  font-style: normal;
  line-height: 210%;
  text-align: center;
  position: relative;
  width: 195px;
  height: 36px;
  display: inline-block;
  color: ${(props) => (props.isSelected ? '#5EBEEB' : '#313131')};
  border-bottom: 2px solid
  ${(props) => (props.isSelected ? '#5EBEEB' : '#D9D9D9')};
`;

export const Rectangle242 = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 390px;
  height: 40px;
  left: 0px;
  top: 107px;
  padding-top : 4px;
  ${TEXT_STYLES.BodyR16};
`;

export const TabContents = styled.div`
  top: 200px;
  position: absolute;
`;