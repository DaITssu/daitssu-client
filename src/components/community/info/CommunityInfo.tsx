import styled from '@emotion/styled';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';

const CommunityInfo = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <Container>
      <MenuBox>
        <LeftBox>
          <Image
            src="/noticeInfo/backarrow.svg"
            alt="goback"
            width={8.95}
            height={15.64}
            priority
          />
        </LeftBox>
        <CenterBox>커뮤니티</CenterBox>
        <RightBox>
          <MenuIconBox onClick={handleMenuClick}>
            {/** TODO: ... 아이콘 넣기 */}|
          </MenuIconBox>
          {menu ? (
            <PopupContainerBox>
              <ReportBox>
                <PopIconBox>
                  <Image
                    src="/noticeInfo/report.svg"
                    alt="report image"
                    width={18}
                    height={18}
                    priority
                  />
                </PopIconBox>
                <PopTextBox>신고하기</PopTextBox>
              </ReportBox>
              <BlockBox>
                <PopIconBox>
                  <Image
                    src="/noticeInfo/report.svg"
                    alt="report image"
                    width={18}
                    height={18}
                    priority
                  />
                </PopIconBox>
                <PopTextBox>차단하기</PopTextBox>
              </BlockBox>
            </PopupContainerBox>
          ) : (
            ''
          )}
        </RightBox>
      </MenuBox>
      <InfoBox>
        {/** TODO: 태그 형식으로 변경 필요 */}
        <div>질문</div>
      </InfoBox>
      <Padding>
        <ProfileBox>
          <ProfileLeftBox>
            <Image
              src="/noticeInfo/profile.svg"
              alt="profile image"
              width={45}
              height={45}
              priority
            />
          </ProfileLeftBox>
          <ProfileCenterBox>
            <ProfileTopBox>
              <NickNameBox>닉네임</NickNameBox>
            </ProfileTopBox>
            <ProfileBottomBox>
              <DateBox>2023/05/20</DateBox>
              <TimeBox>21:23</TimeBox>
              <ProfileRightBox>
                <ViewBox>
                  <ViewIconBox>
                    <Image
                      src="/noticeInfo/watch.svg"
                      alt="watch count"
                      width={17}
                      height={17}
                      priority
                    />
                  </ViewIconBox>
                  <ViewCountBox>5회</ViewCountBox>
                </ViewBox>
              </ProfileRightBox>
            </ProfileBottomBox>
          </ProfileCenterBox>
        </ProfileBox>
        <TitleBox>이거 어떻게 하는 거예요</TitleBox>
        <ContentBox>
          엄청나게 잘해서 A+를 받겠어~ 엄청나게 잘해서 A+를 받겠어~ 종강아
          어서와
        </ContentBox>
        <UnderBarBox>
          <IconCountBox>
            <IconBox>
              {/** TODO: icon 수정 */}
              <Image
                src="/noticeInfo/message.svg"
                alt="heart icon"
                width={24}
                height={24}
                priority
              />
            </IconBox>
            <CountBox>5</CountBox>
          </IconCountBox>
          <IconCountBox>
            <IconBox>
              {/** TODO: icon 수정 */}
              <Image
                src="/noticeInfo/message.svg"
                alt="comment icon"
                width={24}
                height={24}
                priority
              />
            </IconBox>
            <CountBox>5</CountBox>
          </IconCountBox>
          <IconCountBox>
            <IconBox>
              {/** TODO: icon 수정 */}
              <Image
                src="/noticeInfo/message.svg"
                alt="bookmark icon"
                width={24}
                height={24}
                priority
              />
            </IconBox>
            <CountBox>0</CountBox>
          </IconCountBox>
        </UnderBarBox>
      </Padding>
      <BottomBox>
        <CommentTitleBox>댓글</CommentTitleBox>
      </BottomBox>
      <Comment />
      <CommentInput />
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
  hr {
    border: solid 1px rgba(217, 217, 217, 1);
  }
`;

const Padding = styled.div`
  padding: 0 10px;
`;

const MenuBox = styled.div`
  display: flex;
  height: 46px;
`;

const LeftBox = styled.div`
  margin-left: 10px;
  position: absolute;
  top: 2.5%;
`;

const CenterBox = styled.div`
  font-size: 20px;
  margin: auto;
  font-weight: 500;
`;

const RightBox = styled.div``;

const MenuIconBox = styled.div`
  position: absolute;
  right: 5%;
  top: 2.5%;
`;

const PopupContainerBox = styled.div`
  margin-top: 32px;
  position: absolute;
  // TODO: menu icon 크기에 맞게 조정 필요
  right: 5%;
  z-index: 1;
  background-color: white;
  font-size: 14px;
  border: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

const ReportBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

const BlockBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
`;

const PopIconBox = styled.div`
  display: flex;
  align-items: center;
`;

const PopTextBox = styled.div`
  font-size: 14px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  font-weight: 400;
`;

const InfoBox = styled.div`
  padding: 10px;
`;

const ProfileBox = styled.div`
  display: flex;
`;

const ProfileLeftBox = styled.div``;

const ProfileCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  width: 345px;
`;

const ProfileRightBox = styled.div`
  display: flex;
  margin-left: auto;
`;

const ProfileTopBox = styled.div``;

const NickNameBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  margin-left: 10px;
`;

const ProfileBottomBox = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
`;

const DateBox = styled.div`
  margin-left: 10px;
  font-size: 14px;
  align-items: center;
  color: #6e6e6e;
  display: flex;
`;

const TimeBox = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-left: 7px;
  color: #6e6e6e;
`;

const ViewBox = styled.div`
  margin-left: auto;
  display: flex;
`;

const ViewIconBox = styled.div`
  align-items: center;
`;

const ViewCountBox = styled.div`
  margin-left: 6px;
  font-size: 14px;
  align-items: center;
  color: #6e6e6e;
`;

const TitleBox = styled.div`
  margin: 10px 0;
  font-weight: 500;
  font-size: 20px;
`;

const ContentBox = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 24px;
`;

const UnderBarBox = styled.div`
  display: flex;
`;

const IconCountBox = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: center;
  margin-bottom: 20px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const CountBox = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #6e6e6e;
  margin-left: 5px;
`;

const BottomBox = styled.div``;

const CommentTitleBox = styled.div`
  background-color: rgba(249, 249, 249, 1);
  font-size: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export default CommunityInfo;
