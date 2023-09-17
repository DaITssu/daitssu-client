import React from 'react';
import { COLORS } from '@/styles/constants/colors';
import styled from 'styled-components';
interface HorizontalLineProps {
  width?: number;
  color?: string;
  height?:number;
}

const HorizontalLineWrapper = styled.div<HorizontalLineProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '400px')};
  height: ${(props) => (props.height ? `${props.height}px` : '1px')};
  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.grayscale.Gray1}`)};
  margin: 10px 0;
`;

const HorizontalLine = () => {
  return <HorizontalLineWrapper />;
};

export default HorizontalLine;
