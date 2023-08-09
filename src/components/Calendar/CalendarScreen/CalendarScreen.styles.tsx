import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const CalendarScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.SSU.secondary};
  padding: 20px;
`;

export const SubjectListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
`;

export const rowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;

export const row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TodayOrDateText = styled.p`
  ${TEXT_STYLES.HeadM20}
  color: ${COLORS.SSU.primary};
`;

export const countText = styled.p`
  ${TEXT_STYLES.HeadM20};
  color: ${COLORS.grayscale.Gray1};
`;
