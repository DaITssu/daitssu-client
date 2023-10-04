import styled from '@emotion/styled';
import Image from 'next/image';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import {COLORS} from '@/styles/constants/colors';

export const SearchBarBox = styled.div`
  width : 100%;
  height :56px;
  top : 108px;
  left : 0px;
  padding-left : 16px;
  padding-right : 16px;
  padding-bottom : 8px; 
  box-sizing : border-box;
  position : absolute;
  background: ${COLORS.grayscale.white};
`;

export const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${COLORS.SSU.primary};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  ${TEXT_STYLES.BodyM16};
`;

export const GlassImage = styled(Image)`
  margin-right: 10px;
`;
export const Circle = styled.div`
  margin-right: 15px;
  width : 18px;
  height : 18px;
  border-radius : 50%;
  background-color : ${COLORS.grayscale.Gray3};
`;
export const CancelImage = styled(Image)`
filter: brightness(0) invert(1);
`;
