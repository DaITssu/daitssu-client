import * as styles from './NoticeInfo.style';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';

const NoticeInfo = () => {
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
  };
  return (
    <styles.Container>
      <styles.MenuBox>
        <styles.LeftBox>
          <Image
            src="/noticeInfo/backarrow.svg"
            alt="goback"
            width={8.95}
            height={15.64}
            priority
          />
        </styles.LeftBox>
        <styles.CenterBox>공지사항</styles.CenterBox>
      </styles.MenuBox>
      <styles.InfoBox>
        <styles.TypeBox>학사</styles.TypeBox>
        <styles.TitleBox>2023-1학기 신청 기간 안내 (05.15 ~)</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox>
            <Image
              src="/noticeInfo/calendar.svg"
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>2023/05/11</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src="/noticeInfo/watch.svg"
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>1706회</span>
          </styles.WatchBox>
          <styles.ShareBox onClick={handleShareClick}>
            <styles.ShareIconBox>
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
            </styles.ShareIconBox>
            {/** TODO: 박스 외부 영역 누르면 팝업 닫히도록 */}
            {share ? (
              <styles.SharePopupBox>
                <styles.UrlBox>
                  <styles.DropdownIconBox>
                    <Image
                      src="/noticeInfo/url.svg"
                      alt="goback"
                      width={18}
                      height={18}
                      priority
                    />
                  </styles.DropdownIconBox>
                  <styles.DropdownTextBox>url 복사</styles.DropdownTextBox>
                </styles.UrlBox>
                <styles.KakaoBox>
                  <styles.DropdownIconBox>
                    <Image
                      src="/noticeInfo/kakao.svg"
                      alt="kakaotalk"
                      width={18}
                      height={18}
                      priority
                    />
                  </styles.DropdownIconBox>
                  <styles.DropdownTextBox>카카오톡</styles.DropdownTextBox>
                </styles.KakaoBox>
              </styles.SharePopupBox>
            ) : (
              ''
            )}
          </styles.ShareBox>
        </styles.MiddleBox>
        <hr />
        <styles.ContentBox>
          2023-1학기 다전공 신청기간 안내드립니다. 2023-1학기 다전공 신청기간
          안내드립니다. 2023-1학기 다전공 신청기간 안내드립니다.
        </styles.ContentBox>
        <hr />
        <styles.FileBox>
          <styles.FileTopBox>
            <styles.FileIconBox>
              <Image
                src="/noticeInfo/attach.svg"
                alt="attchment"
                width={20}
                height={20}
                priority
              />
            </styles.FileIconBox>
            <styles.FileTitleBox>첨부파일</styles.FileTitleBox>
          </styles.FileTopBox>
          <styles.FileAttachBox>
            <styles.FileNameBox>
              2023-1학기-전공별-다전공-선발-방법.xlsx
            </styles.FileNameBox>
            <styles.FileDownBox>
              <Image
                src="/noticeInfo/download.svg"
                alt="download button"
                width={18}
                height={18}
                priority
              />
            </styles.FileDownBox>
          </styles.FileAttachBox>
        </styles.FileBox>
      </styles.InfoBox>
      <styles.BottomBox>
        <styles.CommentTitleBox>댓글</styles.CommentTitleBox>
      </styles.BottomBox>
      <Comment />
      <CommentInput />
    </styles.Container>
  );
};

export default NoticeInfo;
