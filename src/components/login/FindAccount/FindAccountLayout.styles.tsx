import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { Button } from '@/components/common/Button/Button.styles';

export const FindAccountLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 110px;
`;

export const FindAccountMessage = styled.div`
  color: ${COLORS.SSU.primary};
  ${TEXT_STYLES.HeadSM20};

  margin-bottom: 16px;
`;

export const SubMessage = styled.div`
  color: ${COLORS.grayscale.Gray1};
  ${TEXT_STYLES.BodyM16}
`;

export const FindButton = styled(Button)`
  background-color: white;
  border: 1px solid ${COLORS.SSU.primary};
  color: black;
  ${TEXT_STYLES.HeadM18}

  margin-bottom: 24px;
`;
