import React from 'react';
import { Container } from '../Calendar/Calendar.styles';
import { DayBlockN, DayBlockBox } from '../DayBlock/DayBlock.styles';

const WeekBlock = () => {
  const dayList: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  return (
    <Container>
      <DayBlockBox>
        <DayBlockN weekday={0} style={{ fontSize: '14px', height: '29px' }}>
          {'SUN'}
        </DayBlockN>
      </DayBlockBox>
      {dayList.map((wd, index) => (
        <DayBlockBox key={`weekday-${index}`}>
          <DayBlockN style={{ fontSize: '14px', height: '29px' }}>
            {wd}
          </DayBlockN>
        </DayBlockBox>
      ))}
      <DayBlockBox>
        <DayBlockN weekday={6} style={{ fontSize: '14px', height: '29px' }}>
          {'SAT'}
        </DayBlockN>
      </DayBlockBox>
    </Container>
  );
};

export default WeekBlock;
