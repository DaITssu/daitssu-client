
import React from 'react';
import { Container } from '../Calendar/Calendar.styles';
import { DayBlockN,TasksToday,DayBlockBox,Task } from '../DayBlock/DayBlock.styles';

const WeekBlock = () => {
  const whatDay: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  return (
    <>
      <Container>
        <div className="item" style={{ height: '29px' }}>
          <DayBlockBox>
            <DayBlockN SpecialDay={0}
              style={{ fontSize: '14px', height: '29px' }}>
              {'SUN'}
            </DayBlockN>
          </DayBlockBox>
        </div>
        {whatDay.map((wd, index) => (
          <div style={{ height: '29px' }}  key={`weekday-${index}`}>
            <DayBlockBox>
              <DayBlockN FontSize='14px' Height='29px' key={`weekday-${index}`}>
                {wd}
              </DayBlockN>
            </DayBlockBox>
          </div>
        ))}
        <div className="item" style={{ height: '29px' }}>
          <DayBlockBox>
            <DayBlockN SpecialDay={6} FontSize='14px' Height='29px' key={`weekday-${6}}`}>
                {"SAT"}
              </DayBlockN>
          </DayBlockBox>
        </div>
      </Container>
    </>
  );
};

export default WeekBlock;
