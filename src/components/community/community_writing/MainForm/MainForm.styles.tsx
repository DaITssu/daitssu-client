
import styled from '@emotion/styled';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

interface SubmitBoxnProps {
  width?: number;
  height?: number;
  color?: string;
  margin?:number;
}

export const SubmitBox = styled.div<SubmitBoxnProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '390px')};
  height: ${(props) => (props.height ? `${props.height}px` : '46px')};
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : '0px')};
  border-radius: 12px;
  text-align: center;
  align-items: center; 
  display: flex;
  justify-content: space-between;
  
`;

interface SubmitBoxButtonnProps {
  width?: number;
  height?: number;
  color?: string;
}
export const SubmitBoxButton = styled.div<SubmitBoxButtonnProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '18px')};
  height: ${(props) => (props.height ? `${props.height}px` : '18px')};
  display: flex;
  align-items: center; 
  justify-content: center;
  font-size:18px;
`;

interface SubmitBoxTitleProps {
  width?: number;
  height?: number;
  color?: string;
}
export const SubmitBoxTitle = styled.div<SubmitBoxTitleProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '52px')};
  height: ${(props) => (props.height ? `${props.height}px` : '30px')};
  display: flex;
  align-items: center; 
  justify-content: center;
  font-size:20px;
`;

