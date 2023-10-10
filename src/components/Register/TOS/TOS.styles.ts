import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const TOSStyle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
`;

export const Divider = styled.div`
  background-color: ${COLORS.grayscale.Gray5};
  height: 16px;
`;

export const TOSHedaer = styled.div`
  ${TEXT_STYLES.BodyM16};
  background-color: white;
  height: 50px;
  padding: 16px;
`;

export const TOSBody = styled.div`
  flex: 1;

  width: 100%;
  padding: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: normal;
  word-wrap: break-word;
`;

export const AgreeBtnDiv = styled.div`
  margin: 0 auto;

  padding-bottom: 24px;
  padding-top: 10px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
