
import { COLORS } from '../../../../styles/constants/colors';
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
  margin-top:${(props) => (props.marginT ? `${props.marginT}px` : '10px')};
  margin-bottom:${(props) => (props.marginB ? `${props.marginB}px` : '10px')};

  display: flex;
  flex-direction: column; /* 세로로 정렬하기 위해 컬럼 방향으로 설정 */
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */

  color: ${COLORS.grayscale.Black}; /* 원하는 폰트 색상 설정 */
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')}; /* 원하는 폰트 크기 설정 */

`;


// onChange 이벤트 핸들러 추가
