import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const CalendarButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border: 1px solid ${COLORS.grayscale.Gray2};
`;

export const CalendarButtonText = styled.p`
  ${TEXT_STYLES.CapM14}
  color: ${COLORS.grayscale.Gray2};
`;
