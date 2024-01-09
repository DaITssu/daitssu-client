
import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
interface SubjectSelectProps {
  width?: number;
  height?: number;
  color?: string;
  marginTop?:number;
  marginBottom?:number;
}

export const SubjectSelectBox = styled.div<SubjectSelectProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '46px')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : '0px')};
  border-radius: 12px;
  align-items: center; 
  display: flex;
  
`;
interface SubjectSelectListProps {
  width?: number;
  height?: number;
  color?: string;
  marginTop?:number;
  marginBottom?:number;
}

export const SubjectSelectBoxList = styled.div<SubjectSelectListProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '70%')};
  height: ${(props) => (props.height ? `${props.height}px` : '46px')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  border-radius: 12px;
  align-items: center; 
  display: flex;
  font-size: 16px; 
`;