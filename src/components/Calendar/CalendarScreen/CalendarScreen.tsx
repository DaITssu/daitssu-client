import React, { useEffect, useState } from 'react';
import SubjectList from '../SubjectList';
import { SubjectDTOExample } from '@/types/Subject';
import Calendar from '../Calendar/Calendar';
import * as styles from './CalendarScreen.styles';
import CalendarButton from './CalendarButton/CalendarButton';
import useModal from '@/components/common/Modal/useModal';
import Modal from '@/components/common/Modal';
import EditEventModal from '../EditEventModal';
import CalendarIcon from '@icons/icon/Icon24/CalenderUpdate.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getCalendarAPI } from '@/apis/courseAPIS';
import { isSameDate } from '@/utils/time';

export interface CalendersResponse {
  course: string;
  calendarResponses: CalendarResponse[];
}

export interface CalendarResponse {
  id: number;
  type: CalendarType;
  /// DateTime
  dueAt: string;
  name: string;
  isCompleted: boolean;
}

export enum CalendarType {
  ASSIGNMENT = 'ASSIGNMENT',
  VIDEO = 'VIDEO',
  OFFLINE_LECTURE = 'OFFLINE_LECTURE',
  QUIZ = 'QUIZ',
}

const CalendarScreen = () => {
  const router = useRouter();
  const { open, PopUp, close } = useModal();
  let today = new Date();

  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const [selectDay, setSelectDay] = useState<number>(today.getDate());
  const [monthlyTasks, setMonthlyTasks] = useState<CalendersResponse[]>([]);
  const [dailyTasks, setDailyTasks] = useState<CalendersResponse[]>([]);

  function onDayClick(day: number) {
    if (day === -1) {
      return;
    }
    setSelectDay(day);
    var dailyTaskList: CalendersResponse[] = [];
    for (let i = 0; i < monthlyTasks.length; i++) {
      const filteredResponses = monthlyTasks[i].calendarResponses.filter(
        (response) => {
          return isSameDate(
            new Date(response.dueAt),
            new Date(year, month - 1, day),
          );
        },
      );
      if (filteredResponses.length > 0) {
        dailyTaskList.push(monthlyTasks[i]);
      }
    }
    setDailyTasks(dailyTaskList);
  }

  function onMonthChange(year: number, month: number) {
    setYear(year);
    setMonth(month);

    const getCalendarResponse = getCalendarAPI(
      `${year}-${month < 10 ? '0' + month.toString() : month}`,
    );
    getCalendarResponse.then((res) => {
      setMonthlyTasks(res.data);
      onDayClick(selectDay);
    });
  }

  function onEditAlarmClick() {
    //TODO 알림 화면에서 보여줄 데이터 전달
    router.push('/calendar/alarm');
  }

  function onTapRefresh() {
    //TODO : Refresh 로직 구현(토큰으로 로그인)
    console.log('강제 업데이트');
  }
  useEffect(() => {
    let current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    // 이번달 데이터 저장

    const getCalendarResponse = getCalendarAPI(
      `${year}-${month < 10 ? '0' + month.toString() : month}`,
    );
    getCalendarResponse.then((res) => {
      setMonthlyTasks(res.data);
    });
  }, []);

  // now
  const now = new Date();

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <>
      <styles.CalendarScreenContainer>
        <Calendar
          year={year}
          month={month}
          selectDay={selectDay}
          dayTasks={dailyTasks}
          onDayClick={onDayClick}
          onMonthChange={onMonthChange}
        />
      </styles.CalendarScreenContainer>

      <styles.SubjectListContainer>
        <styles.rowSpaceBetween>
          <styles.row>
            <styles.TodayOrDateText>
              {now.getFullYear() === year &&
              now.getMonth() + 1 === month &&
              now.getDate() === selectDay
                ? 'Today'
                : month + '/' + selectDay + ' ' + week[now.getDay()]}
            </styles.TodayOrDateText>
            <styles.TodayOrDateText style={{ padding: '0px 10px 0px 10px' }}>
              {' · '}
            </styles.TodayOrDateText>
            <styles.countText>{dailyTasks?.length ?? 0}</styles.countText>
          </styles.row>
          <styles.row>
            <div
              onClick={onTapRefresh}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={CalendarIcon}
                width={24}
                height={24}
                alt="Calendar Update"
              />
            </div>
            <CalendarButton text={'알림설정'} onClick={onEditAlarmClick} />
            <CalendarButton text={'추가'} onClick={open} />
          </styles.row>
        </styles.rowSpaceBetween>
        <SubjectList
          subjectList={dailyTasks}
          key={String(month) + String(selectDay)}
        />
      </styles.SubjectListContainer>
      <PopUp>
        <Modal onClose={close} title="일정 추가하기">
          <EditEventModal onClose={close} />
        </Modal>
      </PopUp>
    </>
  );
};

export default CalendarScreen;
