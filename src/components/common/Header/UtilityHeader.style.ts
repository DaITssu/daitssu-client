import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';

export const Conatiner = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  padding: 20px;
  justify-content: center;
  background-color: white;
`;

export const LogoText = styled.div`
  ${TEXT_STYLES.HeadM20}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLeftImg = styled.div`
  position: absolute;
  cursor: pointer;
  left: 0;
  margin-left: 16px;
`;
export const LogoRightImg = styled.div`
  position: absolute;
  right: 0;
  margin-right: 16px;
`;

interface DeleteTextProps {
  isPossibleDelete: boolean;
}

export const DeleteText = styled.div<DeleteTextProps>`
  ${TEXT_STYLES.BodyM16}
  color: ${(props) =>
    props.isPossibleDelete
      ? `${COLORS.SSU.primary}`
      : `${COLORS.grayscale.Gray3}`};
`;

export const ConfirmText = styled.div`
  ${TEXT_STYLES.HeadM18}
  color: var(--Primary-color, #5ebeeb);
`;
