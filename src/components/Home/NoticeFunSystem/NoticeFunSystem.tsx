import { useState } from 'react';
import * as styles from './NoticeFunSystem.style';

interface SummaryText{
  textContent : string;
  date : string;
}

export interface NoticeFunSystemProps{
  title : string;
  summaries : SummaryText[];
}


const NoticeFunSystem:React.FC<NoticeFunSystemProps> = ({title, summaries}) => {

  return (
    <div>
      <styles.SummaryBox>
        <styles.TopBox>
          <styles.Title>
            {title}
          </styles.Title>
          <styles.MoreButton>
            더보기
            <img className= "arrow" src = "/assets/icon/Arrow/RightSmallArrow.svg"/>
          </styles.MoreButton>
        </styles.TopBox >
        
        <styles.TextBox>
          <styles.Line top="55px"/>
          <styles.Line top="112px"/>
          <styles.TextLine top = "16px">
            <styles.TextSummary>
              {summaries[0].textContent}
            </styles.TextSummary>
            <styles.Date>
              {summaries[0].date}
            </styles.Date>
          </styles.TextLine>
          <styles.TextLine top = "73px">
            <styles.TextSummary>
              {summaries[1].textContent}
            </styles.TextSummary>
            <styles.Date>
              {summaries[1].date}
            </styles.Date>
          </styles.TextLine>
          <styles.TextLine top = "130px">
            <styles.TextSummary>
              {summaries[2].textContent}
            </styles.TextSummary>
            <styles.Date>
              {summaries[2].date}
            </styles.Date>
          </styles.TextLine>
        </styles.TextBox>
      </styles.SummaryBox>
      
    </div>
  );
};

export default NoticeFunSystem;