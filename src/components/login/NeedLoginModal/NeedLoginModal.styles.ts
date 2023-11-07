import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const ModalContainer = styled.div`
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalMessage = styled.div`
  ${TEXT_STYLES.HeadM20}
  margin-bottom: 40px;
`;
