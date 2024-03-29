import React, { useState, useEffect } from 'react';
import DayBlock from '../DayBlock/DayBlock';
import WeekBlock from './WeekBlock/WeekBlock';
import MonthControlButton from '../MonthControlButton/MonthControlButton';
import * as styles from './Calendar.styles';
import { CalendersResponse } from '../CalendarScreen/CalendarScreen';

interface CalendarProps {
  year: number;
  month: number;
  selectDay: number;
  dayTasks: CalendersResponse[];
  onMonthChange: (year: number, month: number) => void;
  onDayClick: (day: number) => void;
}

const Calendar = (props: CalendarProps) => {
  //val to control
  const [year, setYear] = useState<number>(props.year);
  const [month, setMonth] = useState<number>(props.month);

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const [firD, setFirD] = useState<number>(firstDayOfMonth.getDay());
  const lastDayOfMonth1 = new Date(year, month, 1);
  const lastDayOfMonth = new Date(lastDayOfMonth1.getTime() - 1);
  const [lastDN, setLastDN] = useState<number>(lastDayOfMonth.getDate());

  const dayTasks = props.dayTasks;
  const [selectedDay, setSelectedDay] = useState(props.selectDay);

  useEffect(() => {
    setYear(props.year);
    setMonth(props.month);
    setSelectedDay(props.selectDay);
  }, [props.year, props.month, props.selectDay]);

  const selectNewDay = (newSelectedDay: number) => {
    setSelectedDay(newSelectedDay);
    props.onDayClick(newSelectedDay);
  };

  const colorList: string[] = [
    '#FF7171',
    '#FF9E68',
    '#FFD057',
    '#FF8DC4',
    '#B7E532',
    '#B69BE3',
    '#A48172',
    '#73E4DE',
    '#6197FF',
    '#35CC7B',
    '#BDBDBD',
  ];

  const changeMonth = (value: number) => {
    let newYear = year;
    let newMonth = month + value;

    if (newMonth > 12) {
      newYear = year + 1;
      newMonth = 1;
    } else if (newMonth < 1) {
      newYear = year - 1;
      newMonth = 12;
    }
    setYear(newYear);
    setMonth(newMonth);

    const firstDayOfMonth = new Date(year, newMonth - 1, 1);
    setFirD(firstDayOfMonth.getDay());

    const lastDayOfMonth11 = new Date(year, newMonth, 1);
    const lastDayOfMonth22 = new Date(lastDayOfMonth11.getTime() - 1);
    setLastDN(lastDayOfMonth22.getDate());

    props.onMonthChange(newYear, newMonth);
  };

  const currentDate: Date = new Date();
  var today: number;

  if (currentDate.getMonth() + 1 == month) {
    today = currentDate.getDate();
  } else {
    today = 0;
  }

  const weeks: number[][] = [[], [], [], [], [], []];
  var nowD = 1;
  var nowW = 0;
  for (var i = 0; i < firD; i++) {
    weeks[nowW].push(-1);
  }
  while (nowD <= lastDN) {
    while (weeks[nowW].length < 7) {
      weeks[nowW].push(nowD);
      nowD++;
      if (nowD > lastDN) {
        break;
      }
    }
    if (nowD > lastDN) {
      break;
    }
    nowW++;
  }
  while (weeks[nowW].length < 7) {
    weeks[nowW].push(-1);
  }
  if (weeks[weeks.length - 1][0] < 0) {
    weeks.pop();
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <styles.CalendarContainer>
        <styles.TitleContainer>
          <MonthControlButton
            isLeft={true}
            onClick={() => {
              changeMonth(-1);
            }}
          />
          <styles.CalendarTitle>
            {year}년 {month}월
          </styles.CalendarTitle>
          <MonthControlButton
            isLeft={false}
            onClick={() => {
              changeMonth(1);
            }}
          />
        </styles.TitleContainer>
        <styles.Container>
          <WeekBlock />
        </styles.Container>

        {weeks.map((eachWeek, weekIndex) => (
          <styles.Container key={`week-${weekIndex}`}>
            {eachWeek.map((day, dayIndex) => (
              // 각 날짜들 배치
              <div
                className="item"
                onClick={() => {
                  selectNewDay(day);
                }}
                key={`day-${dayIndex}`}
              >
                <DayBlock
                  day={day}
                  taskColors={
                    dayTasks.hasOwnProperty(day)
                      ? props.dayTasks.map((e, index) => {
                          return colorList[index];
                        })
                      : []
                  }
                  selectedDay={day === selectedDay}
                  today={day == today}
                  specialDay={dayIndex != 0 && dayIndex != 6 ? -1 : dayIndex}
                />
              </div>
            ))}
          </styles.Container>
        ))}
      </styles.CalendarContainer>
    </div>
  );
};

export default Calendar;
