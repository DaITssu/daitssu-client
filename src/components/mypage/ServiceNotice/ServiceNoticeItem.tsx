import * as styles from './ServiceNoticeItem.styles';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface ServiceNoticeItemProps {
  title: string;
  content : string;
  date: string;
}

export interface Props {
  item: ServiceNoticeItemProps;
}

const ServiceNoticeItem: React.FC<Props> = ({ item }: Props) => {
  const notice_onClick = () => {};
  return (
    <Link href={{
      pathname : '/notice/info',
      query : { title: item.title, content : item.content, date: item.date }
    }}> 
      <styles.Noticeitem onClick={notice_onClick}>
        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.NoticeDate>{item.date}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

export default ServiceNoticeItem;
