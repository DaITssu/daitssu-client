import * as styles from './ServiceNoticeItem.styles';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface ServiceNoticeItemProps {
  title: string;
  views: number;
  date: string;
}

export interface Props {
  item: ServiceNoticeItemProps;
}

const ServiceNoticeItem: React.FC<Props> = ({ item }: Props) => {
  const notice_onClick = () => {};
  return (
    <Link href={'/notice/info'}> 
      <styles.Noticeitem onClick={notice_onClick}>
        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.ViewIcon src="/assets/icon/Icon18/SmallHits.svg" />
        <styles.NoticeViews>
          {item.views.toLocaleString('ko-KR')}회
        </styles.NoticeViews>
        <styles.NoticeDate>{item.date}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

export default ServiceNoticeItem;
