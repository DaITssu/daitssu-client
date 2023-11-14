import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';

export const Conatiner = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 20px;
  justify-content: center;
  background-color: white;
  z-index: 8888;
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
  color: ${COLORS.SSU.primary};
`;
export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  position: absolute;
  background-color: white;
  right: 0;
  border: 1px solid ${COLORS.grayscale.Gray4};
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.grayscale.Gray4};
  }
`;

export const DropdownItemText = styled.div`
  ${TEXT_STYLES.CapR14}
  padding: 5px 10px;
  &:hover {
    background-color: #f6f6f6;
  }
`;
