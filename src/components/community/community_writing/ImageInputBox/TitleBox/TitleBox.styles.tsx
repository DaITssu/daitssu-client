
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface titleProps {
  width?: number;
  height?: number;
  marginT?:number;
  marginB?:number;
  fontSize?:number;
  backgroundColor?:string;
}

export const TitleBox = styled.div<titleProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: ${(props) => (props.height ? `${props.height}px` : '40px')};
  margin-top:${(props) => (props.marginT ? `${props.marginT}px` : '3px')};
  margin-bottom:${(props) => (props.marginB ? `${props.marginB}px` : '0px')};

  display: flex;
  flex-direction: column; 
  justify-content: center;

  color: ${COLORS.grayscale.Black}; 
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')}; 
`;


// onChange 이벤트 핸들러 추가
