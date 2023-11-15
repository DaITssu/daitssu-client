import * as styles from './NoticeItem.styles';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import view from '@icons/icon/Icon18/SmallHits.svg';
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
        <styles.NoticeStatus>{item.bundle}</styles.NoticeStatus>

        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.ViewIcon src= {view} width={18} height={18} alt={'view_icon'}  />
        <styles.NoticeViews>
          {item.views.toLocaleString('ko-KR')}회
        </styles.NoticeViews>
        <styles.NoticeDate>{item.date}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

export default NoticeItem;
