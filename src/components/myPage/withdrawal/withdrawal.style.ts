import styled from '@emotion/styled';
import { COLORS } from '../../../styles/constants/colors';

export const withdrawalStyle = styled.div`
  height: 100vh;
  background-color: white;
  padding: 16px;
`;

export const withdrawalHeader = styled.div``;

export const withdrawalHeaderText = styled.div`
  color: ${COLORS.grayscale.Gray1};
`;

export const WithdrawalItemStyle = styled.div`
  color: var(--black, #313131);
  /* Body M 16 */
  line-height: 150%; /* 24px */

  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 15px;
  }
`;

export const WithdrawalEmptySpace = styled.div`
  width: 100vw;
  margin-left: -16px;
  height: 20px;
  background-color: ${COLORS.grayscale.Gray5};
`;

export const WithdrawalWarningText = styled.div`
  color: ${COLORS.SSU.error};
`;

export const WithdrawalInput = styled.input`
  background-color: white;
  height: 40px;
  width: 100%;
  border: 1px solid ${COLORS.grayscale.Gray3};
  border-radius: 6px;

  ::placeholder {
    color: var(--gray-2, #bdbdbd);
    padding: 10px;
    /* Caption R 14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.154px;
  }
`;

export const WithdrawalButton = styled.div`
  background-color: ${COLORS.SSU.error};
  color: white;
  border-radius: 12px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
