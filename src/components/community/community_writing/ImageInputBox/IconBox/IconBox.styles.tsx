
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
interface IconBoxProps {
  width?: number;
  height?: number;
  margin?:number;
  backgroundColor?:string;
}

export const IconBox = styled.div<IconBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: ${(props) => (props.height ? `${props.height}px` : '100px')};
  margin-right:${(props) => (props.margin ? `${props.margin}px` : '10px')};
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || COLORS.grayscale.Gray4}; // 배경색 스타일 추가
 

`;


// onChange 이벤트 핸들러 추가
