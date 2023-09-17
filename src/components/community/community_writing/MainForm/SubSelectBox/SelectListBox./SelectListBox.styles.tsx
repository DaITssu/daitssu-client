
import styled from '@emotion/styled';

interface SelectListBoxProps {
  width?: number;
  height?: number;
  color?: string;
  margin?:number;
}

export const SelectListBox = styled.div<SelectListBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '390px')};
  height: ${(props) => (props.height ? `${props.height}px` : '46px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border-radius: 12px;
  align-items: center; 
  display: flex;
  font-size: 16px; 
`;