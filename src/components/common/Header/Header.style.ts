import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';

export const Conatiner = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  padding: 20px;
  justify-content: space-between;
`;

export const LogoText = styled.div`
  ${TEXT_STYLES.Logo}
  color:${COLORS.SSU.primary};
  width: 118px;
  height: 42px;
  left: 16px;
  top: 9px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
