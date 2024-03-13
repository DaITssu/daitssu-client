
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
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '20px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border-radius: 12px;
  align-items: center;
  display: flex;
  font-size: 20px;
  border: 1px none; 
  outline: none;
  padding: 10px; 

  &::placeholder {
    font-size: 20px; 
    color: ${COLORS.grayscale.Gray3}; 
  }
  color: ${COLORS.grayscale.Black}; 

  background-color: ${COLORS.grayscale.white}
`;

// onChange 이벤트 핸들러 추가
