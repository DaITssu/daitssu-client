import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { Button } from '@/components/common/Button/Button.styles';

export const AuthContentContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  margin-bottom: 12px;
`;

export const AuthCheckBtnContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

export const AuthCheckBtn = styled.button`
  background-color: transparent;
  border: none;

  color: ${COLORS.grayscale.Gray1};
  font-family: 'Pretendard';
  font-size: 12px;
`;
