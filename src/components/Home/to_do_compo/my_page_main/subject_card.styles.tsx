import { COLORS } from '@/styles/constants/colors';
import {TEXT_STYLES} from '@/styles/constants/textStyles';
import styled from '@emotion/styled';
import React from 'react'; // React import 추가

interface Props {
  width?: number;
  height?: number;
  color?:string;
  margin?:number;
}

export const SubjectCard = styled.div<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : '171px')};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  padding: 15px;
  margin-left:${(props) => (props.margin ? `${props.margin}px` : '5px')};

  border-radius: 15px;
  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.SSU.accept}`)};
  
  outline: 1px solid ${COLORS.grayscale.white}; 
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const NoticeNumRound = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? `${props.width}px` : '24px')};
  height: ${(props) => (props.height ? `${props.height}px` : '24px')};
  border-radius: 12px;
  color: ${COLORS.grayscale.white};
  font-size: 12px; /* font-size 값 수정 */
  background-color: ${(props) => (props.color ? `${props.color}` : `${COLORS.SSU.error}`)};

`;
interface Props2 {
  fontSize?: number;
  color?:string;
  fontFamily?: string;
  letterSpacing?: number;
  fontWeight?: number;
  
}
export const SubjectCardText = styled.div<Props2>`
  color: ${(props) => (props.color ? `${props.color}` : COLORS.grayscale.Gray1)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize+3}px` : `${TEXT_STYLES.CapR14.fontSize+3}px` )};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : TEXT_STYLES.CapR14.fontWeight)};
  letter-spacing: ${(props) => (props.letterSpacing ? `${props.letterSpacing}` : TEXT_STYLES.CapR14.letterSpacing)};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : TEXT_STYLES.CapR14.fontFamily)};
`;

interface CategoryProps {
  /** 상태값 종류, true->채워진 배경 | false->흰 배경 */
  BgColor: boolean;
}

export const Category = styled.div<CategoryProps>`
  height: 35px;
  padding: 0 15px;
  line-height: 35px;
  border-radius: 20px;
  text-align: center;
  display: inline-block;
  color: ${(props) =>
    props.BgColor ? COLORS.grayscale.white : COLORS.SSU.primary};
  background-color: ${(props) =>
    props.BgColor ? COLORS.SSU.primary : COLORS.grayscale.white};
  border: 1px solid
    ${(props) => (props.BgColor ? COLORS.SSU.primary : COLORS.SSU.primary)};
  ${TEXT_STYLES.CapM14};
`;
