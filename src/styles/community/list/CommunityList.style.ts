import styled from '@emotion/styled';

export const CommunityListBox = styled.div
`
position : absolute;
width: 100%;
height:670px;
top : 166px;
overflow : auto;
left:0px;
-ms-overflow-style: none;
scrollbar-width: none;
::-webkit-scrollbar {
  display: none;
}
background: #FFFFFF;
`;

export const PlusButton = styled.img`
  position: fixed; 
  width: 80px;
  height: 80px;
  bottom: 20px; 
  right: 20px; 
`;

export const TagList = styled.div
`

/* Rectangle 317 */

box-sizing: border-box;
display : flex;
align-items : center;
gap :12px;
padding-left: 16px;
position: absolute;
width: 100%;
height: 59px;
left: 0px;
top: 107px;

/* white */
background: #FFFFFF;
/* gray 3 */
border-bottom: 1px solid #D9D9D9;
margin : 0 auto;
justify-content: center;
`;

export const TagButton = styled.button
`
flex: none;
  display: inline-flex;
  align-items: center; /* 버튼 내부 요소들을 수직 중앙 정렬 */
  box-sizing: border-box;
  white-space: nowrap;
  text-align: left;
  padding: 0px 12px; /* 좌우 여백 조정 */
  background-color: #FFFFFF;
  border: 1px solid #5EBEEB;
  border-radius: 20px;

  height: 36px;
  /* Primary color */
  color: #5EBEEB;
  /* Caption M 14 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  letter-spacing: -0.011em;
`;