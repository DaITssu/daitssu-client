import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

interface ButtonProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Button = styled.div<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '358px')};
  height: ${(props) => (props.height ? `${props.height}px` : '56px')};
  line-height: ${(props) => (props.height ? `${props.height}px` : '56px')};
  border-radius: 12px;
  text-align: center;
  color: ${COLORS.grayscale.white};
  background-color: ${(props) =>
    props.color ? `${props.color}` : `${COLORS.SSU.primary}`};
`;

