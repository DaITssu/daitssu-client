import Calendar from './Calendar';
import React, { useState } from 'react';

const PageCalendar: React.FC = () => {
  const currentDate: Date = new Date();

  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1);
  const [year, setYear] = useState<number>(currentDate.getFullYear());

  const datTasks: { [key: number]: Array<string> } = {
    3: ['#ffaa00', '#ff0000', '#ffaa00', '#ffaa00'],
    5: ['#ffaa00', '#ff0000'],
    14: ['#ffaa00', '#ff0000'],
  };
  var selectedDay: number = currentDate.getDate();

  return (
    <div>
      <div
        style={{
          width: '330px',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <Calendar
          key={`${year}-${month}`} // year와 month 값을 key로 설정
          year={year}
          month={month}
          selectDay={selectedDay}
          dayTasks={datTasks}
        />
      </div>
    </div>
  );
};
export default PageCalendar;
