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
        <CenterBox>커뮤니티</CenterBox>
      </MenuBox>
      <InfoBox>
        {/** TODO: 태그 형식으로 변경 필요 */}
        <div>질문</div>
      </InfoBox>
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
  top: 4%;
`;

const CenterBox = styled.div`
  font-size: 20px;
  margin: auto;
  font-weight: 500;
`;

const InfoBox = styled.div`
  padding: 10px;
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
