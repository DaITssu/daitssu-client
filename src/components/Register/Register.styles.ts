import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const RegisterContainer = styled.div`
  background-color: ${COLORS.grayscale.Gray5};
`;

export const Box = styled.div`
  width: 100%;

  padding: 16px;
  background-color: white;
`;

export const BoxHeaderText = styled.div`
  ${TEXT_STYLES.BodyM16}
  padding: 10px 0;
`;

export const BoxInnerText = styled.div`
  ${TEXT_STYLES.CapM14}
  margin-bottom: 4px;
  color: ${COLORS.grayscale.Gray1};
`;

export const RegisterNickNameInput = styled.input<{ isDuplicated: boolean }>`
  border-radius: 6px;
  background-color: white;
  border: 1px solid
    ${(prop) => (prop.isDuplicated ? COLORS.SSU.error : COLORS.grayscale.Gray3)};
  color: black;
  width: 100%;
  height: 48px;
  padding: 12px 60px 12px 8px;
`;

export const TosItemStyle = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TosItemImageDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const RegisterNickNameInputButton = styled.button`
  ${TEXT_STYLES.CapR12}
  position: absolute;
  right: 8px;
  top: 50%;
  padding: 3px 9px 3px 9px;
  color: ${COLORS.grayscale.Gray1};
  background-color: ${COLORS.grayscale.Gray4};
  transform: translateY(-50%);
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const RegisterTextArea = styled.input`
  ${TEXT_STYLES.BodyR16};
  color: ${COLORS.grayscale.Gray1};
  background-color: ${COLORS.grayscale.Gray5};
  border: 1px solid ${COLORS.grayscale.Gray4};
  width: 100%;
  padding: 12px 8px 12px 8px;
  border-radius: 6px;
  margin-bottom: 12px;
  outline: none;
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

export const WarningText = styled.div`
  margin-top: 20px;
  ${TEXT_STYLES.CapR12};
  color: ${COLORS.SSU.error};
`;

export const EssentialText = styled.div`
  display: inline-block;
  color: ${COLORS.SSU.error};
`;

export const OptionText = styled.div`
  display: inline-block;
  color: ${COLORS.grayscale.Gray2};
`;
