import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { Button } from '@/components/common/Button/Button.styles';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const AuthContentContainer = styled.div`
  position: absolute;
  bottom: 150px;
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
  justify-content: center;
`;

export const AuthCheckBtn = styled.button`
  background-color: transparent;
  border: none;

  color: ${COLORS.grayscale.Gray1};
  ${TEXT_STYLES.CapR12}
`;
