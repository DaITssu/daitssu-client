import { COLORS } from '@/styles/constants/colors';
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface Props {
  width?: number;
  height?: number;
  color:string;
  margin?:number;
}

export const SubjectCard = styled.div<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : '171px')};
  height: ${(props) => (props.height ? `${props.height}px` : '102px')};
  padding: 15px;
  margin-left:${(props) => (props.margin ? `${props.margin}px` : '5px')};

  border-radius: 15px;
  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.SSU.accept}`)};
  
  outline: 2px solid ${COLORS.grayscale.white}; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

interface Props2 {
  fontSize?: number;
  color?:string;
  fontFamily?: string;
  letterSpacing?: number;
  fontWeight?: number;
  
}
export const SubjectCardText = styled.div<Props2>`
  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize+3}px` : `${TEXT_STYLES.CapR14.fontSize+3}px` )};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : TEXT_STYLES.CapR14.fontWeight)};
  letter-spacing: ${(props) => (props.letterSpacing ? `${props.letterSpacing}` : TEXT_STYLES.CapR14.letterSpacing)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : TEXT_STYLES.CapR14.fontFamily)};
  margin-bottom: 6px;
`;
