
import styled from '@emotion/styled';

export const NoticeDate = styled.text
`
position: absolute;
left: 81.28%;
right: 3.35%;
top: 60.27%;
bottom: 10.96%;

/* Caption R 14 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
letter-spacing: -0.011em;

/* gray 1 */
color: #6E6E6E;

`;

export const NoticeViews = styled.text
`/* 1,706회 */

position: absolute;
left: 9.5%;
right: 70.93%;
top: 60.27%;
bottom: 10.96%;
text-align : left;
/* Caption R 14 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
letter-spacing: -0.011em;

/* gray 1 */
color: #6E6E6E;
`;

export const ViewIcon = styled.img
`
position: absolute;
left: 3.07%;
right: 91.9%;
top: 61.64%;
bottom: 13.7%;

`;


export const Noticeitem = styled.button
`
  margin-left: 16px;
  
  list-style:none;
  position:relative;
  width: 358px;
  height: 73px;
  margin-bottom : 12px;
  border-top : 10px;

  border: 0;
  background: #F9F9F9;
  border-radius: 12px;
  &:active{
    background-color:#E7F5FC;
  }
`;



export const NoticeTitleFont = styled.div
`
position: absolute;
left: 3.35%;
right: 23.93%;
top: 16.44%;
bottom: 50.68%;

/* Body M 16 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
/* identical to box height, or 24px */
letter-spacing: -0.011em;

/* black */
color: #313131;

text-align : left;
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;