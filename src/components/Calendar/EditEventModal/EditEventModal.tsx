import { ReactElement, forwardRef, use, useEffect, useState } from 'react';
import * as styles from './EditEventModal.styles';
import ToggleButton from '@/components/common/Button/ToggleButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import calendar from '@icons/icon/Calendars/calendar.svg';
import Image from 'next/image';
import {
  getCourseAPI,
  postCourseAssignmentAPI,
  postCourseVideoAPI,
} from '@/apis/courseAPIS';
import { Course } from '@/types/course';

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
  const [type, setType] = useState(props.event?.type ?? 'video');
  const [title, setTitle] = useState(props.event?.title ?? '');
  const [closeTime, setCloseTime] = useState<Date | null>(
    props.event?.closeTime ?? new Date(),
  );
  const [isFinished, setIsFinished] = useState(
    props.event?.isFinished ?? false,
  );

  const [subjectList, setSubjectList] = useState<Course[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Course | null>(null);

  useEffect(() => {
    getCourseAPI().then((res) => {
      if (res) {
        setSubjectList(res.data);
        // 초기 subject 설정
        setSelectedSubject(res.data[0]);
      }
    });
  }, []);

  const onSubmit = () => {
    if (type === 'video') {
      if (selectedSubject) {
        postCourseAssignmentAPI(selectedSubject.id, title);
      }
    }
    if (type === 'assignment') {
      if (selectedSubject) {
        postCourseVideoAPI(selectedSubject.id, title);
      }
    }
    props.onClose();
  };

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubject = subjectList.find(
      (subject) => subject.name === event.target.value,
    );
    setSelectedSubject(selectedSubject ?? null);
  };

  return (
    <div>
      <styles.rowContainer>
        <styles.rowFirstItem>
          <styles.typeTitle>종류</styles.typeTitle>
        </styles.rowFirstItem>
        <styles.rowSecondItem>
          <styles.typeDropDown onChange={handleChange}>
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
          <styles.classifyDropDown onChange={handleSubjectChange}>
            {subjectList.map((subject) => (
              <option value={subject.name} key={subject.id}>
                {subject.name}
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
          {/* set title */}
          <styles.input
            placeholder="일정 제목을 입력하세요."
            onChange={(event) => setTitle(event.target.value)}
          />
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
