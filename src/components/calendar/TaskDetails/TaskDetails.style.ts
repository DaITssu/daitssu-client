import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  background: var(--white, #fff);
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 16px;
  margin: 0px;
`;

export const dateLabel = styled.p`
  color: #6e6e6e;
  font-size: 14px;
  margin: 0px;
`;

export const finishButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3px 10px;
  border-radius: 12px;
  background: var(--error-color, #f36262);
  color: #ffffff;
  font-size: 12px;
  line-break: strict;
`;
