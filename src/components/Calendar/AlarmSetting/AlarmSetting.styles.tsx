import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
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

export const Label = styled.p`
  margin: 0;
  ${TEXT_STYLES.BodyR16}
  color: ${COLORS.grayscale.Gray1};
`;

export const SubLabel = styled.p`
  margin: 0;
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray2};
`;
