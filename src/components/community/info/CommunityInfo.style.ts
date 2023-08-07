import styled from '@emotion/styled';

export const Container = styled.div`
  width: 390px;
  hr {
    border: solid 1px rgba(217, 217, 217, 1);
  }
`;

export const Padding = styled.div`
  padding: 0 10px;
`;

export const MenuBox = styled.div`
  display: flex;
  height: 46px;
`;

export const LeftBox = styled.div`
  margin-left: 10px;
  position: absolute;
  top: 2.5%;
`;

export const CenterBox = styled.div`
  font-size: 20px;
  margin: auto;
  font-weight: 500;
`;

export const RightBox = styled.div``;

export const MenuIconBox = styled.div`
  position: absolute;
  right: 5%;
  top: 2.5%;
`;

export const PopupContainerBox = styled.div`
  margin-top: 38px;
  position: absolute;
  // TODO: menu icon 크기에 맞게 조정 필요
  right: 7%;
  z-index: 1;
  background-color: white;
  font-size: 14px;
  border: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

export const ReportBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

export const BlockBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
`;

export const PopIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PopTextBox = styled.div`
  font-size: 14px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  font-weight: 400;
`;

export const InfoBox = styled.div`
  padding: 10px;
`;

export const ProfileBox = styled.div`
  display: flex;
`;

export const ProfileLeftBox = styled.div``;

export const ProfileCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  width: 345px;
`;

export const ProfileRightBox = styled.div`
  display: flex;
  margin-left: auto;
`;

export const ProfileTopBox = styled.div``;

export const NickNameBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  margin-left: 10px;
`;

export const ProfileBottomBox = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
`;

export const DateBox = styled.div`
  margin-left: 10px;
  font-size: 14px;
  align-items: center;
  color: #6e6e6e;
  display: flex;
`;

export const TimeBox = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-left: 7px;
  color: #6e6e6e;
`;

export const ViewBox = styled.div`
  margin-left: auto;
  display: flex;
`;

export const ViewIconBox = styled.div`
  align-items: center;
`;

export const ViewCountBox = styled.div`
  margin-left: 6px;
  font-size: 14px;
  align-items: center;
  color: #6e6e6e;
`;

export const TitleBox = styled.div`
  margin: 10px 0;
  font-weight: 500;
  font-size: 20px;
`;

export const ContentBox = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 24px;
`;

export const UnderBarBox = styled.div`
  display: flex;
`;

export const IconCountBox = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CountBox = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #6e6e6e;
  margin-left: 5px;
`;

export const BottomBox = styled.div``;

export const CommentTitleBox = styled.div`
  background-color: rgba(249, 249, 249, 1);
  font-size: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
