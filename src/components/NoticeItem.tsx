import styles from "../styles/Top.module.css";
import React from 'react';
import styled from '@emotion/styled';
export interface NoticeItemProps {
  bundle: string;
  title: string;
  views:number;
  date:string;
}

interface Props{
  item:NoticeItemProps;
}

const NoticeItem:React.FC<Props> = ({item}:Props)=>{
  const notice_onClick = () =>{

  }
  return(
    
    <Noticeitem onClick ={notice_onClick}>
      
      <NoticeStatus>
        <NoticeText>
          {item.bundle}
        </NoticeText>
      </NoticeStatus>
      
      <NoticeTitleFont>
        {item.title}
      </NoticeTitleFont>
      <ViewIcon src="/images/view_icon.png"/>
      <NoticeViews>
        {item.views.toLocaleString('ko-KR')}회
      </NoticeViews>
      <NoticeDate>
        {item.date}
      </NoticeDate>
    </Noticeitem>
  );
};
const NoticeDate = styled.text
`
position: absolute;
left: 81.28%;
right: 3.35%;
top: 71.29%;
bottom: 7.92%;

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
const NoticeViews = styled.text
`position: absolute;
left: 8.5%;
right: 70%;
top: 71.29%;
bottom: 7.92%;
text-align: left;
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

const ViewIcon = styled.img
`
position:absolute;
top:73px;
left:11px;
`;
const Noticeitem = styled.button
`
  list-style:none;
  position:relative;
  width: 358px;
  height: 101px;
  margin-bottom : 12px;
  border-top : 10px;

  border: 0;
  background: #F9F9F9;
  border-radius: 12px;
  &:active{
    background-color:#E7F5FC;
  }
`;

const NoticeText = styled.div
`
width: 24px;
  height: 18px;
  text-align:left;
  /* Caption M 12

  커뮤니티 카테고리
  */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 150%;
  /* identical to box height, or 18px */
  text-align: center;
  letter-spacing: -0.025em;

  /* black */
  color: #313131;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoticeStatus = styled.div
`
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 3px 10px;
gap: 10px;

position: absolute;
width: 25px;
height: 18px;
left: 12px;
top: calc(50% - 24px/2 - 28.5px);

/* gray 3 */
background: #D9D9D9;
border-radius: 12px;
`;
const NoticeTitleFont = styled.div
`
position: absolute;
left: 3.35%;
right: 10.11%;
top: 39.6%;
bottom: 36.63%;
text-align: left;
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
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export default NoticeItem;
