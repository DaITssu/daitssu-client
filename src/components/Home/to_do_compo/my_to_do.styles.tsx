
import styled from '@emotion/styled';

interface CardDisplaysProps {
  width?:number,
  margin?:number
}

export const CardDisplays = styled.div<CardDisplaysProps>`
display: flex;
flex-direction: row; 
align-items: center;
justify-content: flex-start, 


width:${(props) =>
  props.width ?  `${props.width}px`  : "390px"};
margin-bottom:${(props) =>
  props.margin ?  `${props.margin}px`  : "0px"};
`;
