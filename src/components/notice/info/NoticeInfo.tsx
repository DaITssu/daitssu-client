import * as styles from './NoticeInfo.style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';
import Share from '@icons/icon/Icon24/Share.svg';
import SmallHits from '@icons/icon/Icon18/SmallHits.svg';
import AttchedFile from '@icons/icon/Icon24/AttachedFile.svg';
import Download from '@icons/icon/Icon24/Download.svg';
import Calendar from '@icons/icon/Nav/calendar_off.svg';
import Url from '@icons/icon/Icon18/Url.svg';
import Kakao from '@icons/icon/Icon18/Kakao.svg';
import { getNoticeInfoAPI, getNoticeInfoCommentAPI } from '@/apis/noticeAPIS';
import { Comments, NoticeInfoProps } from '@/types/NoticeFunsystem';
import UtilityHeader from '@/components/common/Header/UtilityHeader';
import { useRouter } from 'next/router';
import { getKor } from '../CategoryMapping';

const NoticeInfo = () => {
  const [noticeData, setNoticeData] = useState<NoticeInfoProps>();
  const [noticeComments, setNoticeComments] = useState<Comments[]>();
  const [share, setShare] = useState<boolean>(false);
  const handleShareClick = () => {
    setShare(!share);
  };

  // 현재 주소 값
  const router = useRouter();
  const path = router.asPath;
  const numericPart = path.match(/\d+/);
  const pathId = numericPart ? numericPart[0] : 1;

  // 공지사항 API 연결
  useEffect(() => {
    const getNoticeInfo = getNoticeInfoAPI(Number(pathId));
    getNoticeInfo.then((res) => {
      setNoticeData(res.data);
      console.log(res.data);
    });
  }, []);

  // 공지사항 댓글 API 연결
  useEffect(() => {
    const getNoticeComments = getNoticeInfoCommentAPI(Number(pathId));
    getNoticeComments.then((res) => {
      setNoticeComments(res.data);
      console.log('comment', res.data);
    });
  });

  return (
    <styles.Container>
      <UtilityHeader child="공지사항" />
      <styles.InfoBox>
        <styles.TypeBox>{getKor(noticeData?.category)}</styles.TypeBox>
        <styles.TitleBox>{noticeData?.title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox>
            <Image
              src={Calendar}
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>{noticeData?.createdAt.slice(0, 10)}</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src={SmallHits}
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>{noticeData?.views}</span>
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
        <styles.ContentBox>{noticeData?.content}</styles.ContentBox>
        {noticeData?.fileUrl.length !== 0 && (
          <>
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
          </>
        )}
      </styles.InfoBox>
      <styles.BottomBox>
        <styles.CommentTitleBox>댓글</styles.CommentTitleBox>
      </styles.BottomBox>
      {noticeComments?.map((comment) => {
        return <Comment key={comment.commentId} nickname={} />;
      })}
      <Comment />
      <CommentInput />
    </styles.Container>
  );
};

export default NoticeInfo;
