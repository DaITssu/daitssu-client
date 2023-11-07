import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const ConfirmRegisterLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ConfirmRegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ConfirmButton = styled.button`
  bottom: 40px;
  width: 80%;
  height: 51px;
  border: none;
  ${TEXT_STYLES.HeadM18}
  color: ${COLORS.grayscale.white};
  background-color: ${COLORS.SSU.primary};
  border-radius: 12px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExplainText = styled.div`
  ${TEXT_STYLES.HeadM20}
  color: ${COLORS.grayscale.Black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
