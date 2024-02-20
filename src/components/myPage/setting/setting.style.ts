import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';

interface SettingDivTextProps {
  color?: string;
}

export const SettingStyle = styled.div`
  height: 100vh;
  background-color: white;
  padding: 16px;
`;

export const SettingBox = styled.div``;

export const SettingBoxHeader = styled.div`
  color: var(--gray-2, #bdbdbd);
`;

export const SettingButton = styled.button`
  width: 100%;
  border: none;
  background-color: white;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${COLORS.grayscale.Gray4};
  text-align: start;
`;

export const SettingDiv = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${COLORS.grayscale.Gray4};
`;

export const SettingDivText = styled.div<SettingDivTextProps>`
  color: ${(props) => {
    if (props.color === 'red') return COLORS.SSU.error;
    if (props.color === 'blue') return COLORS.SSU.primary;
    return COLORS.grayscale.Black;
  }};
  width: 90%;
`;

export const SettinDivImg = styled.div`
  width: 10%;
`;
