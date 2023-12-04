import * as styles from './NoticeItem.styles';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import view from '@icons/icon/Icon18/SmallHits.svg';
import { getKor } from './CategoryMapping';

export interface NoticeItemProps {
  id: number;
  title: string;
  views: number;
  category: string;
  createdAt: string;
}

interface Props {
  item: NoticeItemProps;
}
const formattedDate = (originalDate: String) => {
  const parts = originalDate.split('T')[0].split('-');
  return `${parts[0].slice(2)}/${parts[1]}/${parts[2]}`;
};
const NoticeItem: React.FC<Props> = ({ item }: Props) => {
  const notice_onClick = () => {};

  return (
    <Link href={`/notice/${item.id}`}>
      <styles.Noticeitem onClick={notice_onClick}>
        <styles.NoticeStatus>{getKor(item.category)}</styles.NoticeStatus>

        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.ViewIcon src={view} width={18} height={18} alt={'view_icon'} />
        <styles.NoticeViews>
          {item.views.toLocaleString('ko-KR')}회
        </styles.NoticeViews>
        <styles.NoticeDate>{formattedDate(item.createdAt)}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

export default NoticeItem;
