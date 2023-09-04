import * as styles from './NoticeInfo.style';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';
import Share from '@icons/icon/Icon24/Share.svg';
import SmallHits from '@icons/icon/Icon18/SmallHits.svg';
import AttchedFile from '@icons/icon/Icon24/AttachedFile.svg';
import Download from '@icons/icon/Icon24/Download.svg';
import Calendar from '@icons/icon/Nav/calendar_off.svg';
import Url from '@icons/icon/Icon18/Url.svg';
import Kakao from '@icons/icon/Icon18/kakao.svg';

const NoticeInfo = () => {
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
  };
  return (
    <styles.Container>
      {/** TODO: 공통 헤더로 수정 */}
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
              src={Calendar}
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>2023/05/11</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src={SmallHits}
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
                  src={Share}
                  alt="share"
                  width={20}
                  height={20}
                  priority
                />
              ) : (
                <Image
                  src={Share}
                  alt="share"
                  width={20}
                  height={20}
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
                      src={Url}
                      alt="url"
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
                      src={Kakao}
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
                src={AttchedFile}
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
                src={Download}
                alt="download button"
                width={20}
                height={20}
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
