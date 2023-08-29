import { useState } from 'react';
import CalendarScreen from '@/components/calendar/CalendarScreen';
import useModal from '@/components/common/Modal/useModal';

export default function Calendar() {
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<number>(8);
  const [selectDay, setSelectDay] = useState<number>(23);

  return (
    <div>
      <CalendarScreen
        year={year}
        month={month}
        selectDay={selectDay}
        dayTasks={{
          3: ['#ffaa00', '#ff0000', '#ffaa00', '#ffaa00'],
          5: ['#ffaa00', '#ff0000'],
          14: ['#ffaa00', '#ff0000'],
        }}
        onDayClick={(day: number) => {
          setSelectDay(day);
        }}
      />
    </div>
  );
}
