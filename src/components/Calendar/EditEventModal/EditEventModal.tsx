import { ReactElement, forwardRef, useState } from 'react';
import * as styles from './EditEventModal.styles';
import ToggleButton from '@/components/common/Button/ToggleButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import calendar from '@icons/icon/Calendars/calendar.svg';
import Image from 'next/image';

interface EditEventModalProps {
  event?: EventProps;
  onClose: () => void;
}

interface EventProps {
  type: string;
  title: string;
  closeTime: Date;
  isFinished: boolean;
}

const EditEventModal = (props: EditEventModalProps) => {
  const [type, setType] = useState(props.event?.type ?? '');
  const [title, setTitle] = useState(props.event?.title ?? '');
  const [closeTime, setCloseTime] = useState<Date | null>(
    props.event?.closeTime ?? new Date(),
  );
  const [isFinished, setIsFinished] = useState(
    props.event?.isFinished ?? false,
  );

  const onSubmit = () => {
    console.log('submit');
    props.onClose();
  };

  const subjectList = [
    '웹프로그래밍및실습',
    '컴파일러',
    '리눅스시스템프로그래밍',
    '컴퓨터그래픽스',
    '컴퓨터네트워크',
    '데이터베이스',
  ];

  type CalendarButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };

  const CalendarButton = forwardRef<HTMLDivElement, CalendarButtonProps>(
    ({ onClick }, ref): ReactElement => (
      <div
        onClick={onClick}
        ref={ref}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
          height: '20px',
        }}
      >
        <styles.calendarText>
          {closeTime?.toLocaleDateString()}
        </styles.calendarText>
        <Image src={calendar} width={18} height={18} alt="CalendarButton" />
      </div>
    ),
  );

  CalendarButton.displayName = 'CalendarButton';

  return (
    <div>
      <styles.rowContainer>
        <styles.rowFirstItem>
          <styles.typeTitle>종류</styles.typeTitle>
        </styles.rowFirstItem>
        <styles.rowSecondItem>
          <styles.typeDropDown>
            {/* 동영상, 과제 */}
            <option value="video">동영상</option>
            <option value="assignment">과제</option>
          </styles.typeDropDown>
        </styles.rowSecondItem>
      </styles.rowContainer>
      <styles.rowContainer>
        <styles.rowFirstItem>
          <styles.typeTitle>분류</styles.typeTitle>
        </styles.rowFirstItem>
        <styles.rowSecondItem>
          <styles.classifyDropDown>
            {subjectList.map((subject) => (
              <option value={subject} key={subject}>
                {subject}
              </option>
            ))}
          </styles.classifyDropDown>
        </styles.rowSecondItem>
      </styles.rowContainer>
      <styles.rowContainer>
        <styles.rowFirstItem>
          <styles.typeTitle>마감기한</styles.typeTitle>
        </styles.rowFirstItem>
        <styles.rowSecondItem>
          <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            selected={closeTime}
            onChange={(date) => setCloseTime(date)}
            customInput={<CalendarButton />}
            key={closeTime?.toString()}
          />
        </styles.rowSecondItem>
      </styles.rowContainer>
      <styles.rowContainer>
        <styles.rowFirstItem>
          <styles.typeTitle>제목</styles.typeTitle>
        </styles.rowFirstItem>
        <styles.rowSecondItem>
          <styles.input placeholder="일정 제목을 입력하세요." />
        </styles.rowSecondItem>
      </styles.rowContainer>
      {/* event가 있으면 온오프 추가 */}
      {props.event && (
        <styles.rowContainer>
          <styles.rowFirstItem>
            <styles.typeTitle>완료</styles.typeTitle>
          </styles.rowFirstItem>
          <styles.rowSecondItem>
            <ToggleButton
              isToggle={isFinished}
              onToggle={() => setIsFinished(!isFinished)}
            />
          </styles.rowSecondItem>
        </styles.rowContainer>
      )}
      <styles.finishButton onClick={onSubmit}>완료</styles.finishButton>
    </div>
  );
};

export default EditEventModal;
