import React, { useState } from 'react';
import * as styles from './AlarmSetting.styles';
import ToggleButton from '@/components/common/Button/ToggleButton';
import video from '@icons/icon/LectureAssignment/Video.svg';
import comment from '@icons/icon/LectureAssignment/Comment.svg';
import assignment from '@icons/icon/LectureAssignment/Assignment.svg';
import Image from 'next/image';
import SubjectTitle from '../SubjectTitle';
import { SubjectDTO } from '@/types/Subject';

import { TaskProps } from '@/types/Task';

interface AlarmProps {
  subjects: SubjectDTO[];
}

const AlarmSetting = (props: AlarmProps) => {
  return (
    <>
      {props.subjects.map((subject, index) => (
        <div key={index}>
          <SubjectTitle subject={subject}></SubjectTitle>
          {subject.tasks.map((task, index) => (
            <SubjectTaskDetail task={task} key={index} />
          ))}
        </div>
      ))}
    </>
  );
};

const SubjectTaskDetail = ({ task }: TaskProps) => {
  const date = new Date(task.dueDate);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const iconMapping: { [key: string]: any } = {
    video: video,
    comment: comment,
    assignment: assignment,
  };
  const icon = iconMapping[task.type] || video;

  //실제로 finish가 알림 off랑 동일한 기능이지 않음으로
  //TODO 알림 온오프 기능 추가
  const [isToggle, setIsToggle] = useState(task.isFinished);

  function toggle() {
    setIsToggle(!isToggle);
    // TODO 온오프 API 연결
  }

  return (
    <styles.Container>
      <styles.LeftDiv>
        <Image priority src={icon} alt={icon} width={24} height={24} />
        <styles.Titles>
          <styles.Label>{task.title}</styles.Label>
          <styles.SubLabel>{time + '까지'}</styles.SubLabel>
        </styles.Titles>
      </styles.LeftDiv>
      <ToggleButton isToggle={isToggle} onToggle={toggle} />
    </styles.Container>
  );
};

export default AlarmSetting;
