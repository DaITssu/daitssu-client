import styled from '@emotion/styled';
import { COLORS } from '../../../styles/constants/colors';

interface containerProps{
  Width?:string;
  Height?:string;
  Key?:string;
}
export const Container = styled.div<containerProps>`
  height: ${(props) =>
  props.Height ? props.Height : "none"};
  width: ${(props) =>
    props.Width ? props.Width : '600px'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  /* Flexbox 사용 */
`;
export const CalendarContainer = styled.div<containerProps>`
  width: ${(props) =>
  props.Width ? props.Width : '600px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleContainer = styled.div<containerProps>`
  width: ${(props) =>
  props.Width ? props.Width : '300px'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;
interface CalendarTitleProps{
  FontSize?:string;
}

export const CalendarTitle = styled.div<CalendarTitleProps>`
  font-size: 20px;
  font-family: 'Pretendard';
  height: '30px';
  display: flex;
  align-items: center;
`;