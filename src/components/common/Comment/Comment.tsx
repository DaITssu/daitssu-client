import styled from '@emotion/styled';
import Image from 'next/image';

const Comment = () => {
  return (
    <CommentWhiteBox>
      <CLeftBox>
        <Image
          src="/noticeInfo/profile.svg"
          alt="profile image"
          width={40}
          height={40}
          priority
        />
      </CLeftBox>
      <CRightBox>
        <CTopBox>
          <NicknameBox>닉네임</NicknameBox>
          <TimeBox>5분 전</TimeBox>
          <OtherBox>
            <MessageBox>
              <Image
                src="/noticeInfo/message.svg"
                alt="message image"
                width={18}
                height={18}
                priority
              />
            </MessageBox>
            <ReportBox>
              <Image
                src="/noticeInfo/report.svg"
                alt="report image"
                width={18}
                height={18}
                priority
              />
            </ReportBox>
          </OtherBox>
        </CTopBox>
        <CommentContentBox>같이 힘냅시다!</CommentContentBox>
      </CRightBox>
    </CommentWhiteBox>
  );
};

const CommentWhiteBox = styled.div`
  padding: 15px 10px;
  display: flex;
`;

const CLeftBox = styled.div`
  div {
    width: 45px;
    height: 45px;
    background-color: gray;
  }
`;

const CRightBox = styled.div`
  width: 373px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
`;

const CTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const NicknameBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

const TimeBox = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 14px;
  align-items: center;
  margin-right: auto;
  color: rgba(110, 110, 110, 1);
`;

const OtherBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const MessageBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 7px;
`;

const ReportBox = styled.div`
  display: flex;
`;

const CommentContentBox = styled.div`
  font-weight: 400;
`;

export default Comment;
