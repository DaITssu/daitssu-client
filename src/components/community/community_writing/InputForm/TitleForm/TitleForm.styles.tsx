import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface TitleFormProps {
  width?: number;
  height?: number;
  color?: string;
  margin?: number;
  selectedValue?: string; // selectedValue 추가
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange 추가
}

export const TitleForm = styled.input<TitleFormProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '400px')};
  height: ${(props) => (props.height ? `${props.height}px` : '20px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border-radius: 12px;
  align-items: center;
  display: flex;
  font-size: 20px;
  border: 1px none; // 원하는 스타일 추가
  outline: none;
  padding: 10px; // 원하는 스타일 추가
  &::placeholder {
    font-size: 20px; /* 원하는 플레이스홀더 텍스트의 글씨 크기로 조정 */
    color: ${COLORS.grayscale.Gray1}; /* 플레이스홀더 텍스트의 색상 지정 */
  }
`;

// onChange 이벤트 핸들러 추가
