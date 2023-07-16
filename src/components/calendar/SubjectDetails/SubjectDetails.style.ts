import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px 16px;

  background: var(--white, #fff);
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ColorDiv = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

export const Label = styled.p`
  margin: 0;
`;
