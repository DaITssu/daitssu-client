import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const InformationText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const InformationTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
`;

export const InformationContent = styled.p`
  font-size: 14px;
  font-weight: 400;
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
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const EditProfileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const EditProfileButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  border: none;
  background-color: #f5f5f5;
  ${TEXT_STYLES.BodyM16};
  color: #000000;
`;
