import styled from '@emotion/styled';

export const NoticeDate = styled.text`
  position: absolute;
  left: 78.28%;
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
  color: #6e6e6e;
`;

export const NoticeViews = styled.text`
  position: absolute;
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
  color: #6e6e6e;
`;

export const ViewIcon = styled.img`
  position: absolute;
  top: 73px;
  left: 11px;
`;

export const Noticeitem = styled.button`
  list-style: none;
  position: relative;
  width: 358px;
  height: 101px;
  margin-bottom: 12px;
  border-top: 10px;

  border: 0;
  background: #f9f9f9;
  border-radius: 12px;
  &:active {
    background-color: #e7f5fc;
  }
`;

export const NoticeText = styled.div`
  width: 24px;
  height: 18px;
  text-align: left;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoticeStatus = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  gap: 10px;

  position: absolute;
  height: 18px;
  left: 12px;
  top: calc(50% - 24px / 2 - 28.5px);

  /* gray 3 */
  background: #d9d9d9;
  border-radius: 12px;
  white-space: nowrap;
  width: min-content;
`;

export const NoticeTitleFont = styled.div`
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
