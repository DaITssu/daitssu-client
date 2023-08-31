import React, { useState } from 'react';
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
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

interface CalendarProps {
  year: number;
  month: number;
  selectDay: number;

  dayTasks: { [key: number]: Array<string> };
  onDayClick: (day: number) => void;
  onMonthChange: (year: number, month: number) => void;

  modals?: {
    [key: string]: {
      open: () => void;
      close: () => void;
      PopUp: React.FC;
    };
  };
}

const CalendarScreen = (props: CalendarProps) => {
  const { open, PopUp, close } = useModal();

  // now
  const now = new Date();

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <>
      <styles.CalendarScreenContainer>
        <Calendar
          year={props.year}
          month={props.month}
          selectDay={props.selectDay}
          dayTasks={props.dayTasks}
          onDayClick={props.onDayClick}
          onMonthChange={props.onMonthChange}
        />
      </styles.CalendarScreenContainer>

      <styles.SubjectListContainer>
        <styles.rowSpaceBetween>
          <styles.row>
            <styles.TodayOrDateText>
              {now.getFullYear() === props.year &&
              now.getMonth() + 1 === props.month &&
              now.getDate() === props.selectDay
                ? 'Today'
                : props.month +
                  '/' +
                  props.selectDay +
                  ' ' +
                  week[now.getDay()]}
            </styles.TodayOrDateText>
            <styles.TodayOrDateText style={{ padding: '0px 10px 0px 10px' }}>
              {' · '}
            </styles.TodayOrDateText>
            <styles.countText>
              {props.dayTasks[props.selectDay]?.length ?? 0}
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
            <CalendarButton text={'알림설정'} onClick={open} />
            <CalendarButton text={'추가'} onClick={open} />
          </styles.row>
        </styles.rowSpaceBetween>
        <SubjectList
          subjectList={[SubjectDTOExample, SubjectDTOExample]}
          key={String(props.month) + String(props.selectDay)}
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
