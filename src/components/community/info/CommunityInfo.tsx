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
      </InfoBox>
      <ProfileBox>
        <ProfileLeftBox></ProfileLeftBox>
        <ProfileCenterBox>
          <ProfileTopBox>
            <NickNameBox></NickNameBox>
          </ProfileTopBox>
          <ProfileBottomBox>
            <DateBox></DateBox>
            <TimeBox></TimeBox>
          </ProfileBottomBox>
        </ProfileCenterBox>
        <ProfileRightBox>
          <ViewBox>
            <ViewIconBox></ViewIconBox>
            <ViewCountBox></ViewCountBox>
          </ViewBox>
        </ProfileRightBox>
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

const ProfileBox = styled.div``;

const ProfileLeftBox = styled.div``;

const ProfileCenterBox = styled.div``;

const ProfileRightBox = styled.div``;

const ProfileTopBox = styled.div``;

const NickNameBox = styled.div``;

const ProfileBottomBox = styled.div``;

const DateBox = styled.div``;

const TimeBox = styled.div``;

const ViewBox = styled.div``;

const ViewIconBox = styled.div``;

const ViewCountBox = styled.div``;

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
