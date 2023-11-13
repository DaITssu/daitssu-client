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

const CalendarScreen = () => {
  const router = useRouter();
  const { open, PopUp, close } = useModal();
  let today = new Date();

  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const [selectDay, setSelectDay] = useState<number>(today.getDate());
  const [dayTasks, setDayTasks] = useState<{ [key: number]: Array<string> }>(
    {},
  );

  function onDayClick(day: number) {
    setSelectDay(day);
  }

  function onMonthChange(year: number, month: number) {
    setYear(year);
    setMonth(month);
    let current = new Date(year, month - 1, 1);
    const getCalendarResponse = getCalendarAPI(
      `${current.getFullYear()}-${current.getMonth() + 1}`,
    );
    getCalendarResponse.then((res) => {
      //TODO : 서버에서 받아온 데이터를 dayTasks에 저장
      console.log(res);
    });
  }

  function onEditAlarmClick() {
    //TODO 알림 화면에서 보여줄 데이터 전달
    router.push('/calendar/alarm');
  }

  useEffect(() => {
    let current = new Date();
    // 이번달 데이터 저장
    const getCalendarResponse = getCalendarAPI(
      `${current.getFullYear()}-${current.getMonth() + 1}`,
    );
    getCalendarResponse.then((res) => {
      console.log(res);
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
          dayTasks={dayTasks}
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
            <styles.countText>
              {dayTasks[selectDay]?.length ?? 0}
            </styles.countText>
          </styles.row>
          <styles.row>
            <div
              onClick={() => {
                // TODO : 새로고침 기능 추가
              }}
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
          subjectList={[SubjectDTOExample, SubjectDTOExample]}
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
