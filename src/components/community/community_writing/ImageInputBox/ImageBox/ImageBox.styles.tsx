import { COLORS } from '../../../../styles/constants/colors';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface ImageBoxProps {
  width?: number;
  height?: number;
  alt:string;
  margin?:number;
}

export const ImageBox = styled.img<ImageBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: ${(props) => (props.height ? `${props.height}px` : '100px')};
  alt: ${(props) => (props.alt ? `이미지 번호 ${props.alt}` : 'noneIndex')};
  margin-right:${(props) => (props.margin ? `${props.margin}px` : '10px')};
  border-radius: 10px;
`;


// onChange 이벤트 핸들러 추가
