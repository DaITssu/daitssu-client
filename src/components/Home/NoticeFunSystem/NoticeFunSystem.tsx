import { useState } from 'react';
import * as styles from './NoticeFunSystem.styles';
import RightArrow from '@icons/icon/Arrow/RightSmallArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export interface SummaryText {
  id: number;
  title: string;
  category: String;
  createdAt: string;
  views: number;
}

export interface NoticeFunSystemProps {
  title: string;
  summaries: SummaryText[];
}

const NoticeFunSystem = (props: NoticeFunSystemProps) => {
  const router = useRouter();

  function handleOnClickMore() {
    if (props.title === '공지사항') {
      router.push('/notice');
    } else {
      router.push('/funsystem');
    }
  }

  return (
    <styles.SummaryBox>
      <styles.TopBox>
        <styles.Title>{props.title}</styles.Title>
        <styles.MoreButton onClick={handleOnClickMore}>
          더보기
          <Image src={RightArrow} alt="right arrow" />
        </styles.MoreButton>
      </styles.TopBox>

      <styles.TextBox>
        <styles.Line top="55px" />
        <styles.Line top="112px" />
        {props.summaries.map((summary, index) => (
          <div key={index}>
            <styles.TextLine top={`${16 + index * 57}px`}>
              <styles.TextSummary>{summary.title}</styles.TextSummary>
              <styles.Date>{calculateDate(summary.createdAt)}</styles.Date>
            </styles.TextLine>
          </div>
        ))}
      </styles.TextBox>
    </styles.SummaryBox>
  );
};

const calculateDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}-${day}`;
};

export default NoticeFunSystem;
