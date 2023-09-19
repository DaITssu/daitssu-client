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
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: ${(props) => (props.height ? `${props.height}px` : '73px')};
  margin-left:${(props) => (props.margin ? `${props.margin}px` : '5px')};

  border-radius: 15px;
  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.grayscale.Gray5}`)};
  
  display: flex; 
  flex-direction: row;
  align-items: center;

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
  width:80px;
  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize+3}px` : `${TEXT_STYLES.CapR14.fontSize}px` )};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : TEXT_STYLES.CapR14.fontWeight)};
  letter-spacing: ${(props) => (props.letterSpacing ? `${props.letterSpacing}` : TEXT_STYLES.CapR14.letterSpacing)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : TEXT_STYLES.CapR14.fontFamily)};
  margin-bottom: 10px;
`;
