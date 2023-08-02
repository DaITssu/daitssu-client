import styled from '@emotion/styled';
import { COLORS } from '../../../styles/constants/colors';

interface MonthControlButtonStyels{
  Height?:string;
  Width?:string;
}
export const MonthControlButtonStyle = styled.div<MonthControlButtonStyels>`
  padding: 10px 20px,
  backgroundColor: ${COLORS.grayscale.white},
  borderRadius: 20px,
  cursor: pointer,
  margin: 5px,
  height: 30px,
  fontSize: 20px,
  fontWeight: bold,

  display: "flex",
  alignItems: "center",
`;