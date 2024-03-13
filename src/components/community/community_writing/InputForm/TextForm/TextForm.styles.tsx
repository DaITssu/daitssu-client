
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface TextFormProps {
  width?: number;
  height?: number;
  rows?: number;
  cols?: number;
  fontSize?:number;
  color?: string;
  margin?: number;
  padding?: number;
  selectedValue?: string; // selectedValue 추가
  handleChange?:(event: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange 타입 변경
}

export const TextForm = styled.textarea<TextFormProps>`
  rows:${(props) => (props.rows ? `${props.rows}` : '20')};
  cols:${(props) => (props.cols ? `${props.cols}` : '50')};
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '400px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  padding-top:${(props) => (props.padding ? `${props.padding}px` : '10px')};
  border-radius: 12px;
  align-items: center;
  display: flex;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  border: 1px none; // 원하는 스타일 추가
  padding: 10px; // 원하는 스타일 추가
  outline: none;

  &::placeholder {
    font-size: 16px; /* 원하는 플레이스홀더 텍스트의 글씨 크기로 조정 */
    color: ${COLORS.grayscale.Gray3}; /* 플레이스홀더 텍스트의 색상 지정 */
  }
  color: ${COLORS.grayscale.Black}; 
  background-color: ${COLORS.grayscale.white}
`;

// onChange 이벤트 핸들러 추가
