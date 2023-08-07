import styled from '@emotion/styled';
import * as styles from '../../styles/constants/NoticeList.style';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
const NoticeList: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false); //기본 브라우저의 클라이언트 사이드 렌더링 제거

  useEffect(() => {
    setMounted(true);
  }, []);

  const [items, setItems] = useState<NoticeItemProps[]>([
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학습역량',
      title: '학습역량 아무말 신청합니다~~~~~~~~~!!!!!!!!!!!!!!!!!',
      views: 1123123,
      date: '23/06/19',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
    {
      bundle: '학사',
      title: '2023-1학기 다전공(복수,부,융합전공) 신청',
      views: 1706,
      date: '24/05/11',
    },
  ]);

  return (
    mounted && (
      <styles.NoticeListBox>
        {items.map((item: NoticeItemProps, key: number) => {
          return <NoticeItem key={key} item={item} />;
        })}
      </styles.NoticeListBox>
    )
  );
};

export default NoticeList;
