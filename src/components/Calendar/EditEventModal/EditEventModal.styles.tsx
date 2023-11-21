import styled from '@emotion/styled';

import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

export const rowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const rowFirstItem = styled.div`
  width: 30%;
`;

export const rowSecondItem = styled.div`
  width: 70%;
`;

export const typeTitle = styled.div`
  ${TEXT_STYLES.BodyM16};
  margin-right: 20px;
`;

export const finishButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${COLORS.SSU.primary};
  color: ${COLORS.grayscale.white};
  ${TEXT_STYLES.HeadM18};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const input = styled.input`
  border-radius: 10px;
  border: 1px solid var(--gray-3, #d9d9d9);
  background-color: var(--gray-1, #f5f5f5);
  padding: 0.5rem 0.5rem;
  ${TEXT_STYLES.CapR14}
  width: 90%;
  color: ${COLORS.grayscale.Black};
  ::placeholder {
    ${TEXT_STYLES.CapR14}
  }
`;

export const typeDropDown = styled.select`
  border-radius: 10px;
  border: 1px solid var(--gray-3, #d9d9d9);
  background-color: var(--gray-1, #f5f5f5);
  color: var(--gray-5, #828282);
  padding: 0.5rem 0.5rem;
  ${TEXT_STYLES.CapR14}
  width: 50%;
`;

export const classifyDropDown = styled.select`
  border-radius: 10px;
  border: 1px solid var(--gray-3, #d9d9d9);
  background-color: var(--gray-1, #f5f5f5);
  color: var(--gray-5, #828282);
  padding: 0.5rem 0.5rem;
  ${TEXT_STYLES.CapR14}
  width: 80%;
`;

export const calendarText = styled.p`
  ${TEXT_STYLES.CapR14};
`;
