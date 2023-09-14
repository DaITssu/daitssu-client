import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

export const InformationText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: ${COLORS.grayscale.Gray5};
`;

export const BigTitle = styled.p`
  ${TEXT_STYLES.HeadM20};
  color: ${COLORS.grayscale.Black};
`;

export const InformationTitle = styled.div`
  width: 80px;
  ${TEXT_STYLES.BodyM16};
`;

export const InformationContent = styled.p`
  ${TEXT_STYLES.BodyM16};
  color: ${COLORS.grayscale.Gray1};
`;

export const EditProfileAppbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${TEXT_STYLES.HeadM20};
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-top: 30px;
  background-color: ${COLORS.grayscale.Gray1};
`;

export const EditProfileButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid ${COLORS.grayscale.Gray3};
  width: 70%;
`;

export const Width24Container = styled.div`
  width: 24;
`;

export const ModalErrorMessage = styled.p`
  ${TEXT_STYLES.CapR12};
  color: ${COLORS.SSU.error};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TextFieldProps {
  isFailed: boolean;
}

export const ModalTextfieldContainer = styled.div<TextFieldProps>`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${COLORS.grayscale.Gray3};
  margin-bottom: 20px;

  align-items: center;
`;

export const ModalTextfield = styled.input`
  height: 40px;
  border: none;
  text-align: center;
  ${TEXT_STYLES.BodyM16};
  color: ${COLORS.grayscale.Black};
  background-color: transparent;
`;

export const ModalTextLengthCounter = styled.p`
  ${TEXT_STYLES.CapR14};
  color: ${COLORS.grayscale.Gray2};
`;

export const ModalButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${COLORS.SSU.primary};
  color: ${COLORS.grayscale.white};
  ${TEXT_STYLES.HeadM18};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
