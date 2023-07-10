import * as styles from './NoticeInfo.style';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

const NoticeInfo = () => {
  return (
    <Container>
      <MenuBox>
        <LeftBox>
          <Icon icon="icon-park-outline:left" color="#6e6e6e" />
        </LeftBox>
        <CenterBox>공지사항</CenterBox>
      </MenuBox>
      <InfoBox>
        <TypeBox>학사</TypeBox>
        <TitleBox>
          2023-1학기 다전공(복수 부 융합전공) 신청 기간 안내 (05.15 ~)
        </TitleBox>
        <MiddleBox>
          <DateBox>
            <Icon icon="ic:round-date-range" color="#6e6e6e" />
            2023/05/11
          </DateBox>
          <WatchBox>
            <Icon icon="ep:view" color="#6e6e6e" />
            1,706회
          </WatchBox>
          <ShareBox>
            <Icon icon="icon-park-outline:share" color="#6e6e6e" />
            <SharePopupBox>
              <UrlBox>url 복사</UrlBox>
              <KakaoBox>카카오톡</KakaoBox>
            </SharePopupBox>
          </ShareBox>
        </MiddleBox>
        <ContentBox>2023-1학기 다전공 신청기간 아내드립니다.</ContentBox>
        <FileBox>
          <FileTopBox>
            <FileIconBox>
              <Icon icon="teenyicons:attach-solid" color="#6e6e6e" />
            </FileIconBox>
            <FileTitleBox>첨부파일</FileTitleBox>
          </FileTopBox>
          <FileAttachBox>
            <FileNameBox>2023-1학기-전공별-다전공-선발-방법.xlsx</FileNameBox>
            <FileDownBox>
              <Icon icon="uil:down-arrow" color="#6e6e6e" />
            </FileDownBox>
          </FileAttachBox>
        </FileBox>
      </InfoBox>
      <BottomBox>
        <CommentTitleBox>댓글</CommentTitleBox>
        <CommentWhiteBox>
          <CommentBox>
            <CLeftBox></CLeftBox>
            <CRightBox>
              <CTopBox>
                <NicknameBox>닉네임</NicknameBox>
                <TimeBox>5분 전</TimeBox>
                <OtherBox>
                  <MessageBox>
                    <Icon icon="bx:message" color="#6e6e6e" />
                  </MessageBox>
                  <ReportBox>
                    <Icon icon="icon-park-outline:report" color="#6e6e6e" />
                  </ReportBox>
                </OtherBox>
              </CTopBox>
              <CommentContentBox>같이 힘냅시다!</CommentContentBox>
            </CRightBox>
          </CommentBox>
        </CommentWhiteBox>
      </BottomBox>
      <MyCommentBox>
        <MyLeftBox>
          <MyCommentLabel placeholder="댓글을 남겨보세요."></MyCommentLabel>
        </MyLeftBox>
        <MyRightBox>
          <MyCommentBtn>등록</MyCommentBtn>
        </MyRightBox>
      </MyCommentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
`;

const MenuBox = styled.div`
  display: flex;
`;

const LeftBox = styled.div``;

const CenterBox = styled.div`
  font-size: 20px;
`;

const InfoBox = styled.div``;

const TypeBox = styled.div``;

const MiddleBox = styled.div`
  display: flex;
`;

const TitleBox = styled.div`
  font-size: 20px;
`;

const DateBox = styled.div``;

const WatchBox = styled.div``;

const ShareBox = styled.div``;

const SharePopupBox = styled.div``;

const UrlBox = styled.div``;

const KakaoBox = styled.div``;

const ContentBox = styled.div``;

const FileBox = styled.div``;

const FileTopBox = styled.div`
  display: flex;
`;

const FileIconBox = styled.div``;

const FileTitleBox = styled.div``;

const FileAttachBox = styled.div`
  display: flex;
`;

const FileNameBox = styled.div``;

const FileDownBox = styled.div``;

const BottomBox = styled.div``;

const CommentTitleBox = styled.div``;

const CommentWhiteBox = styled.div``;

const CommentBox = styled.div``;

const CLeftBox = styled.div``;

const CRightBox = styled.div``;

const CTopBox = styled.div`
  display: flex;
`;

const NicknameBox = styled.div``;

const TimeBox = styled.div``;

const OtherBox = styled.div`
  display: flex;
`;

const MessageBox = styled.div``;

const ReportBox = styled.div``;

const CommentContentBox = styled.div``;

const MyCommentBox = styled.div``;

const MyLeftBox = styled.div``;

const MyRightBox = styled.div``;

const MyCommentLabel = styled.label``;

const MyCommentBtn = styled.button``;

export default NoticeInfo;
