import styled from '@emotion/styled';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '../common/Comment';
import CommentInput from '../common/Comment/CommentInput/CommentInput';

const NoticeInfo = () => {
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
        <CenterBox>공지사항</CenterBox>
      </MenuBox>
      <InfoBox>
        <TypeBox>학사</TypeBox>
        <TitleBox>2023-1학기 신청 기간 안내 (05.15 ~)</TitleBox>
        <MiddleBox>
          <DateBox>
            <Image
              src="/noticeInfo/calendar.svg"
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>2023/05/11</span>
          </DateBox>
          <WatchBox>
            <Image
              src="/noticeInfo/watch.svg"
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>1706회</span>
          </WatchBox>
          <ShareBox onClick={handleShareClick}>
            <ShareIconBox>
              {!share ? (
                <Image
                  src="/noticeInfo/share.svg"
                  alt="goback"
                  width={24}
                  height={24}
                  priority
                />
              ) : (
                <Image
                  src="/noticeInfo/shareClick.svg"
                  alt="goback"
                  width={24}
                  height={24}
                  priority
                />
              )}
            </ShareIconBox>
            {/** TODO: 박스 외부 영역 누르면 팝업 닫히도록 */}
            {share ? (
              <SharePopupBox>
                <UrlBox>
                  <DropdownIconBox>
                    <Image
                      src="/noticeInfo/url.svg"
                      alt="goback"
                      width={18}
                      height={18}
                      priority
                    />
                  </DropdownIconBox>
                  <DropdownTextBox>url 복사</DropdownTextBox>
                </UrlBox>
                <KakaoBox>
                  <DropdownIconBox>
                    <Image
                      src="/noticeInfo/kakao.svg"
                      alt="kakaotalk"
                      width={18}
                      height={18}
                      priority
                    />
                  </DropdownIconBox>
                  <DropdownTextBox>카카오톡</DropdownTextBox>
                </KakaoBox>
              </SharePopupBox>
            ) : (
              ''
            )}
          </ShareBox>
        </MiddleBox>
        <hr />
        <ContentBox>
          2023-1학기 다전공 신청기간 안내드립니다. 2023-1학기 다전공 신청기간
          안내드립니다. 2023-1학기 다전공 신청기간 안내드립니다.
        </ContentBox>
        <hr />
        <FileBox>
          <FileTopBox>
            <FileIconBox>
              <Image
                src="/noticeInfo/attach.svg"
                alt="attchment"
                width={20}
                height={20}
                priority
              />
            </FileIconBox>
            <FileTitleBox>첨부파일</FileTitleBox>
          </FileTopBox>
          <FileAttachBox>
            <FileNameBox>2023-1학기-전공별-다전공-선발-방법.xlsx</FileNameBox>
            <FileDownBox>
              <Image
                src="/noticeInfo/download.svg"
                alt="download button"
                width={18}
                height={18}
                priority
              />
            </FileDownBox>
          </FileAttachBox>
        </FileBox>
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

const TypeBox = styled.div`
  margin: 0px 0 10px;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 14px;
  color: rgba(49, 49, 49, 1);
`;

const MiddleBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 21px;
  span {
    margin-left: 5px;
  }
`;

const TitleBox = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 30px;
`;

const DateBox = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  span {
    margin-left: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    color: rgba(110, 110, 110, 1);
  }
`;

const WatchBox = styled.div`
  margin-left: 15px;
  display: flex;
  text-align: center;
  font-size: 14px;
  span {
    text-align: center;
    display: flex;
    align-items: center;
    color: rgba(110, 110, 110, 1);
  }
`;

const ShareBox = styled.div`
  width: 109.45px;
  margin-left: auto;
`;

const SharePopupBox = styled.div`
  margin-top: 28px;
  position: relative;
  z-index: 1;
  background-color: white;
  font-size: 14px;
  border: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

const ShareIconBox = styled.div`
  float: right;
`;

const DropdownIconBox = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownTextBox = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const UrlBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(238, 238, 238, 1);
`;

const KakaoBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
`;

const ContentBox = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const FileBox = styled.div``;

const FileTopBox = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const FileIconBox = styled.div``;

const FileTitleBox = styled.div`
  font-size: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const FileAttachBox = styled.div`
  display: flex;
  background-color: rgba(238, 238, 238, 1);
  padding: 0 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  height: 45px;
`;

const FileNameBox = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const FileDownBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
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

export default NoticeInfo;
