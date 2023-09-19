import { COLORS } from '@/styles/constants/colors';
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface Props {
  width?: number;
  height?: number;
  color?:string;
  margin?:number;
}

export const MyAssignTitleBox = styled.div<Props>`
  display: flex;
  flex-direction: column; /* 세로로 요소를 나열합니다. */
  justify-content: center; /* 세로 중앙 정렬을 수행합니다. */

  width: ${(props) => (props.width ? `${props.width}px` : '390px')};
  height: ${(props) => (props.height ? `${props.height}px` : '31px')};
  

  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.grayscale.white}`)};
  
`;



interface Props2 {
  fontSize?: number;
  color?:string;
  fontFamily?: string;
  letterSpacing?: number;
  fontWeight?: number;
  
}
export const MyAssignTitleBoxText = styled.div<Props2>`
  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : `${TEXT_STYLES.CapR14.fontSize}px` )};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : TEXT_STYLES.CapR14.fontWeight)};
  letter-spacing: ${(props) => (props.letterSpacing ? `${props.letterSpacing}` : TEXT_STYLES.CapR14.letterSpacing)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : TEXT_STYLES.CapR14.fontFamily)};
  margin-top:5px
`;