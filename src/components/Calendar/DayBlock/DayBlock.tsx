// DayBlock.tsx

import React from 'react';
import { DayBlockN, TasksToday, DayBlockBox, Task } from './DayBlock.styles';
interface DayBlockProps {
  day: number;
  taskColors: Array<string>;
  selectedDay: boolean;
  today: boolean;
  specialDay: number;
}

const DayBlock = (props: DayBlockProps) => {
  let isToday = false;
  let specialDay = -1;
  let select = false;

  if (props.day > 0) {
    if (props.selectedDay) {
      select = true;
    } else if (props.today) {
      isToday = true;
    } else if (props.specialDay === 0) {
      specialDay = 0;
    } else if (props.specialDay !== -1) {
      specialDay = 6;
    }
  }

  return (
    <DayBlockBox>
      <DayBlockN isToday={isToday} weekday={specialDay} isSelected={select}>
        {props.day > 0 ? props.day : ''}
      </DayBlockN>

      {props.day > 0 && (
        <TasksToday>
          {props.taskColors.map((color, index) => (
            <Task key={index} color={color} />
          ))}
        </TasksToday>
      )}
    </DayBlockBox>
  );
};

export default DayBlock;
