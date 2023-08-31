import styled from '@emotion/styled';

interface containerProps {
  width?: string;
  height?: string;
  key?: string;
}

export const Container = styled.div<containerProps>`
  height: ${(props) => (props.height ? props.height : 'none')};
  width: ${(props) => (props.width ? props.width : '100vw')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

export const CalendarContainer = styled.div<containerProps>`
  width: ${(props) => (props.width ? props.width : '350px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div<containerProps>`
  width: ${(props) => (props.width ? props.width : '300px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface CalendarTitleProps {
  FontSize?: string;
}

export const CalendarTitle = styled.div<CalendarTitleProps>`
  font-size: 20px;
  font-family: 'Pretendard';
  height: '30px';
  display: flex;
  align-items: center;
`;
