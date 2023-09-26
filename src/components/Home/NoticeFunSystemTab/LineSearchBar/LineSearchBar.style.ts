import styled from '@emotion/styled';
import Image from 'next/image';

export const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 358px;
  height: 45px;
  border-radius: 25px;
  padding: 0 10px;
  border: 1px solid #6e6e6e;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const GlassImage = styled(Image)`
  margin-right: 10px;
`;
