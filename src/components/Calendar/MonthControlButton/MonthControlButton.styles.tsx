import styled from '@emotion/styled';
import { COLORS } from '../../../styles/constants/colors';

interface MonthControlButtonStyels {
  height?: string;
  width?: string;
}
export const MonthControlButtonStyle = styled.div<MonthControlButtonStyels>`
  padding: 10px 20px;
  background-color: ${COLORS.grayscale.white};
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
