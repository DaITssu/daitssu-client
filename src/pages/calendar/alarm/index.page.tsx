import AlarmSetting from '@/components/Calendar/AlarmSetting';
import Header from '@/components/common/Header/Header';
import { useEffect } from 'react';

export default function AlarmScreen() {
  const example = [
    {
      id: 1,
      title: '웹프로그래밍',
      color: '#FF7171',
      tasks: [
        {
          id: 1,
          title: 'test',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        },
        {
          id: 1,
          title: 'test',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        },
      ],
    },
    {
      id: 2,
      title: '소켓프로그래밍',
      color: '#FF8DC4',
      tasks: [
        {
          id: 1,
          title: 'wow',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'video',
        },
        {
          id: 1,
          title: '과제',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        },
      ],
    },
  ];

  useEffect(() => {
    //TODO 과제 알림 데이터 불러오는 API 연결 함수 작성
  }, []);

  return (
    <>
      <Header />
      <AlarmSetting subjects={example} />
    </>
  );
}
