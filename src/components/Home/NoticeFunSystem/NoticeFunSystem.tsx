import { useState } from 'react';
import * as styles from './NoticeFunSystem.style';
import RightArrow from '@icons/icon/Arrow/RightSmallArrow.svg';
import Image from 'next/image';

interface SummaryText{
  textContent : string;
  date : string;
}

export interface NoticeFunSystemProps{
  title : string;
  summaries : SummaryText[];
}


const NoticeFunSystem= (props:NoticeFunSystemProps) => {

  return (
      <styles.SummaryBox>
        <styles.TopBox>
          <styles.Title>
            {props.title}
          </styles.Title>
          <styles.MoreButton>
            더보기
            <Image src ={RightArrow} alt = "right arrow"/>
          </styles.MoreButton>
        </styles.TopBox >
        
        <styles.TextBox>
          <styles.Line top="55px"/>
          <styles.Line top="112px"/>
          <styles.TextLine top = "16px">
            <styles.TextSummary>
              {props.summaries[0].textContent}
            </styles.TextSummary>
            <styles.Date>
              {props.summaries[0].date}
            </styles.Date>
          </styles.TextLine>
          <styles.TextLine top = "73px">
            <styles.TextSummary>
              {props.summaries[1].textContent}
            </styles.TextSummary>
            <styles.Date>
              {props.summaries[1].date}
            </styles.Date>
          </styles.TextLine>
          <styles.TextLine top = "130px">
            <styles.TextSummary>
              {props.summaries[2].textContent}
            </styles.TextSummary>
            <styles.Date>
              {props.summaries[2].date}
            </styles.Date>
          </styles.TextLine>
        </styles.TextBox>
      </styles.SummaryBox>
      
  );
};

export default NoticeFunSystem;