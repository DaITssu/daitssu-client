import { useState } from 'react';
import * as styles from './NoticeFunSystem.styles';
import RightArrow from '@icons/icon/Arrow/RightSmallArrow.svg';
import Image from 'next/image';

export interface SummaryText {
  textContent: string;
  date: string;
}

export interface NoticeFunSystemProps {
  title: string;
  summaries: SummaryText[];
}

const NoticeFunSystem = (props: NoticeFunSystemProps) => {
  return (
    <styles.SummaryBox>
      <styles.TopBox>
        <styles.Title>{props.title}</styles.Title>
        <styles.MoreButton>
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
