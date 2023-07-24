import styled from '@emotion/styled';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';

const CommunityInfo = () => {
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
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
        <RightBox>{/** TODO: ... 아이콘 넣기 */}</RightBox>
      </MenuBox>
      <InfoBox>
        {/** TODO: 태그 형식으로 변경 필요 */}
        <div>질문</div>
      </InfoBox>{' '}
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
        <TitleBox></TitleBox>
        <ContentBox></ContentBox>
        <UnderBarBox>
          <LikesBox>
            <IconBox></IconBox>
            <CountBox></CountBox>
          </LikesBox>
          <CommentBox>
            <IconBox></IconBox>
            <CountBox></CountBox>
          </CommentBox>
          <BookmarkBox>
            <IconBox></IconBox>
            <CountBox></CountBox>
          </BookmarkBox>
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

const RightBox = styled.div`
  position: absolute;
  top: 3.2%;
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

const TitleBox = styled.div``;

const ContentBox = styled.div``;

const UnderBarBox = styled.div``;

const LikesBox = styled.div``;

const CommentBox = styled.div``;

const BookmarkBox = styled.div``;

const IconBox = styled.div``;

const CountBox = styled.div``;

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
