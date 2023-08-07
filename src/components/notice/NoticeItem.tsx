import * as styles from '../../styles/constants/NoticeItem.style';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface NoticeItemProps {
  bundle: string;
  title: string;
  views: number;
  date: string;
}

interface Props {
  item: NoticeItemProps;
}

const NoticeItem: React.FC<Props> = ({ item }: Props) => {
  const notice_onClick = () => {};
  return (
    <Link href={'/notice/info'}>
      <styles.Noticeitem onClick={notice_onClick}>
        <styles.NoticeStatus>
          <styles.NoticeText>{item.bundle}</styles.NoticeText>
        </styles.NoticeStatus>

        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.ViewIcon src="/images/view_icon.png" />
        <styles.NoticeViews>
          {item.views.toLocaleString('ko-KR')}회
        </styles.NoticeViews>
        <styles.NoticeDate>{item.date}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

export default NoticeItem;
