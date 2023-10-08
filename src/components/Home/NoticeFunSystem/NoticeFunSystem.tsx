import { useState } from 'react';
import * as styles from './NoticeFunSystem.style';
import RightArrow from '@icons/icon/Arrow/RightSmallArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export interface SummaryText {
  textContent: string;
  date: string;
}

export interface NoticeFunSystemProps {
  title: string;
  summaries: SummaryText[];
  color?: string;
}

const NoticeFunSystem = (props: NoticeFunSystemProps) => {
  const router = useRouter();

  function onTapMore() {
    //TODO 더보기 라우팅 연결
    router.push('');
  }

  return (
    <styles.SummaryBox color={props.color}>
      <styles.TopBox>
        <styles.Title>{props.title}</styles.Title>
        <styles.MoreButton onClick={onTapMore}>
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
              <styles.TextSummary>{summary.textContent}</styles.TextSummary>
              <styles.Date>{summary.date}</styles.Date>
            </styles.TextLine>
          </div>
        ))}
      </styles.TextBox>
    </styles.SummaryBox>
  );
};

export default NoticeFunSystem;
