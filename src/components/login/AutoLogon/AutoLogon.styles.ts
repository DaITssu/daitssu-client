import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const AutoLogonContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;
`;

export const CheckBtn = styled.button`
  width: 15px;
  height: 15px;
  margin-right: 8px;

  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  color: ${COLORS.grayscale.Gray2};
  ${TEXT_STYLES.CapR14};
`;
