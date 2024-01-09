
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

interface SelectListBoxProps {
  width?: number;
  height?: number;
  color?: string;
  margin?:number;
}

export const SelectListBox = styled.div<SelectListBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '46px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border-radius: 12px;
  align-items: center; 
  display: flex;
  font-size: 16px; 
`;

interface SelectListSelectProps {
  width?: number;
  height?: number;
  color?: string;
  margin?:number;
}

export const SelectListSelect = styled.select<SelectListSelectProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '92%')};
  height: ${(props) => (props.height ? `${props.height}px` : '45px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border:1px solid ${COLORS.grayscale.Gray3}
  border-radius: 10px;

  align-items: center; 
  display: flex;

  font-size: 14px; 
  color:  ${COLORS.grayscale.Black};
  
  cursor: pointer;

`;
