import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const TextContainer = styled.div`
  height: 44px;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ProcessTextMain = styled.div`
  ${TEXT_STYLES.HeadSB18};
  color: ${COLORS.SSU.primary};
`;

export const ProcessTextSub = styled.div`
  ${TEXT_STYLES.CapM14};
  color: ${COLORS.grayscale.Gray1};
`;
