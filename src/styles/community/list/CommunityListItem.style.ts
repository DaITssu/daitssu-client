import styled from '@emotion/styled';

export const ListBox = styled.button
`
list-style:none;
width : 390px;
height : 134px;
position: relative;
border: 0;
/* white */
background: #FFFFFF;
/* gray 3 */
border-top: 1px solid #D9D9D9;

`;
export const Minutes = styled.div`

position: absolute;
left: 86.67%;
right: 4.1%;
top: 11.94%;
bottom: 72.39%;

/* Caption R 14 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-align: right;
letter-spacing: -0.011em;

/* gray 1 */
color: #6E6E6E;


`;

export const Review = styled.div`
/* 5 */

position: absolute;
left: 93.59%;
right: 4.1%;
top: 72.39%;
bottom: 11.94%;

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
export const Status = styled.div
`
/* 상태 */
white-space : nowrap;

text-align:left;
/* Auto layout */
display: inline-flex;


padding: 2px 10px;
gap: 10px;

position: absolute;
left: 4.1%;
top: 10.45%;
bottom: 71.64%;

/* white */
background: #FFFFFF;
/* Primary color */
border: 1px solid #5EBEEB;
border-radius: 12px;


/* 정보 */

flex : 1;

/* Caption M 12

커뮤니티 카테고리
*/
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 150%;
/* identical to box height, or 18px */
text-align: center;
letter-spacing: -0.025em;

/* Primary color */
color: #5EBEEB;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const BubbleGroup = styled.img`
/* Group 503 */

position: absolute;

width : 18px;
height : 18px;
top : 98px;
left : 341px;


`;


export const Title = styled.div`
/* 장학금 언제 줘요? */

position: absolute;
left: 4.1%;
right : 20%;
top: 32.84%;
bottom: 49.25%;
text-align:left;

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

export const Contents = styled.div`

position: absolute;
left: 4.1%;
right: 20%;
top: 56.72%;
bottom: 11.94%;
text-align:left;

/* Caption R 14 */
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* or 21px */
letter-spacing: -0.011em;

/* gray 1 */
color: #6E6E6E;

/*최대 두줄 */
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
`;