import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

interface weekBoxProps {
  width?: number; 
  height?: number;
  color?: string; 
  text?:keyof typeof TEXT_STYLES;
}


export const weekBox = styled.td<weekBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '155px')};
  height: ${(props) => (props.height ? `${props.height}px` : '74px')};
  text-align: left;

  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].fontSize}px` : `${TEXT_STYLES.CapM14.fontSize}px` )};
  font-weight: ${(props) => (props.text? `${TEXT_STYLES[props.text!].fontWeight}` : TEXT_STYLES.CapM14.fontWeight)};
  letter-spacing: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].letterSpacing}` : TEXT_STYLES.CapM14.letterSpacing)};
  font-family: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].fontFamily}` : TEXT_STYLES.CapM14.fontFamily)};
  margin-top:5px;
  padding-left:15px
`;

export const smallBox = styled.td<weekBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '155px')};
  height: ${(props) => (props.height ? `${props.height}px` : '37px')};
  text-align: left;

  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].fontSize}px` : `${TEXT_STYLES.CapR12.fontSize}px` )};
  font-weight: ${(props) => (props.text? `${TEXT_STYLES[props.text!].fontWeight}` : TEXT_STYLES.CapR12.fontWeight)};
  letter-spacing: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].letterSpacing}` : TEXT_STYLES.CapR12.letterSpacing)};
  font-family: ${(props) => (props.text ? `${TEXT_STYLES[props.text!].fontFamily}` : TEXT_STYLES.CapR12.fontFamily)};
  margin-top:5px
`;

export const smallBox2 = styled.td<weekBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '80px')};
  height: ${(props) => (props.height ? `${props.height}px` : '37px')};
  text-align: center;
`;

