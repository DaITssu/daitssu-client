import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const FlexBox = styled.div`
  background-color: white;
  height: 77vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const TopBox = styled.div``;

export const ContainCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MiddleBox = styled.div`
  background-color: #f9f9f9;
  height: 20px;
`;

export const BottomBox = styled.div``;

export const ContainBox = styled.div`
  display: flex;
  padding: 12px 15px;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const TypeBox = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  ${TEXT_STYLES.BodyM16};

  color: ${(props) =>
    props.type === 'compulsory'
      ? `${COLORS.SSU.error}`
      : `${COLORS.grayscale.Gray2}`};
  margin-right: ${(props) => (props.type === 'none' ? '' : '5px')};
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  ${TEXT_STYLES.BodyM16};
`;

export const ArrowBox = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 15px;
`;

export const InfoBox = styled.div`
  padding: 15px;
  color: ${COLORS.SSU.error};
  ${TEXT_STYLES.CapR12};

  p {
    margin-top: 2px;
  }
`;

export const FinishButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const NavBarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
`;

export const TosItemStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TosItemImageDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ConfirmButton = styled.div<{ isCheck: boolean }>`
  ${TEXT_STYLES.HeadM18}
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.isCheck ? COLORS.SSU.primary : COLORS.grayscale.Gray3};
  border-radius: 12px;
`;
export const Box = styled.div`
  width: 100%;

  padding: 15px;
  background-color: white;
`;

export const BoxHeaderText = styled.div`
  ${TEXT_STYLES.BodyM16}
`;
