import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const FindAuthContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 190px;
  margin-top: 14px;
`;

export const FindIDPasswordBtn = styled.button`
  color: ${COLORS.grayscale.Gray1};
  ${TEXT_STYLES.CapR14}

  background-color: transparent;
  border: none;
`;

export const SignUpBtn = styled.button`
  color: ${COLORS.SSU.primary};
  ${TEXT_STYLES.CapR14}

  background-color: transparent;
  border: none;
`;
