import styled from '@emotion/styled';
import { COLORS } from '../../../styles/constants/colors';

export const BlockAccountStyle = styled.div`
  background-color: white;
  height: 100vh;
  padding: 16px;
`;

export const BlockAccountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockAccountDivImg = styled.div`
  /* width: 20%; */
`;

export const BlockAccountDivName = styled.div`
  margin-left: 15px;
  width: 60%;
`;
export const BlockaccountDivBtn = styled.div`
  /* width: 20%; */
  color: ${COLORS.SSU.error};
  border-radius: 20px;
  border: 1px solid var(--error-color, #f36262);
  display: inline-flex;
  padding: 4px 15px;
  align-items: flex-start;
  gap: 12px;

  cursor: pointer;
`;
