import styled from '@emotion/styled';
import Image from 'next/image';
import { COLORS } from '@/styles/constants/colors';

export const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 358px;
  height: 45px;
  border-radius: 25px;
  padding: 0 10px;
  border: 1px solid ${COLORS.grayscale.Gray1};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
`;

export const GlassImage = styled(Image)`
  margin-right: 10px;
`;
