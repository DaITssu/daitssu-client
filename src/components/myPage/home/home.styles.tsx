import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContentDetil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const ContentText = styled.p`
  ${TEXT_STYLES.BodyM16};
  color: ${COLORS.grayscale.Black};
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  border-radius: 50px;
  background-color: ${COLORS.SSU.primary};
  color: ${COLORS.grayscale.white};
  ${TEXT_STYLES.CapM14};
  cursor: pointer;
`;

export const ContentTitle = styled.p`
  ${TEXT_STYLES.HeadM20};
`;

export const ContentSubTitle = styled.p`
  ${TEXT_STYLES.BodyR16};
  color: ${COLORS.grayscale.Gray1};
`;
