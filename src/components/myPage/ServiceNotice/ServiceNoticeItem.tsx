import * as styles from './ServiceNoticeItem.styles';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface ServiceNoticeItemProps {
  title: string;
  content: string;
  createdAt: string;
}

export interface Props {
  item: ServiceNoticeItemProps;
}

const ServiceNoticeItem: React.FC<Props> = ({ item }: Props) => {
  const notice_onClick = () => {};
  return (
    <Link
      href={{
        pathname: '/my/serviceNotice/info',
        query: {
          title: item.title,
          content: item.content,
          createdAt: formattedDate(item.createdAt),
        },
      }}
    >
      <styles.Noticeitem onClick={notice_onClick}>
        <styles.NoticeTitleFont>{item.title}</styles.NoticeTitleFont>
        <styles.NoticeDate>{formattedDate(item.createdAt)}</styles.NoticeDate>
      </styles.Noticeitem>
    </Link>
  );
};

const formattedDate = (originalDate: String) => {
  const parts = originalDate.split('T')[0].split('-');
  return `${parts[0].slice(2)}/${parts[1]}/${parts[2]}`;
};
export default ServiceNoticeItem;
