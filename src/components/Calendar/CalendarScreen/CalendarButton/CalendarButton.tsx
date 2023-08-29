import React from 'react';
import * as styles from './CalendarButton.styles';

interface CalendarProps {
  text: string;
  onClick: () => void;
}

const CalendarButton = (props: CalendarProps) => {
  return (
    <div onClick={props.onClick} style={{ margin: '0px 0px 0px 10px' }}>
      <styles.CalendarButtonContainer>
        <styles.CalendarButtonText>{props.text}</styles.CalendarButtonText>
      </styles.CalendarButtonContainer>
    </div>
  );
};

export default CalendarButton;
