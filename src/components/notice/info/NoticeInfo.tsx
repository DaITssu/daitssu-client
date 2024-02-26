import * as styles from './NoticeInfo.style';
import { useCallback, useEffect, useState } from 'react';
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
import {
  getCommunityInfoAPI,
  getCommunityInfoCommentAPI,
} from '@/apis/communityAPIS';
import { Comments, NoticeInfoProps } from '@/types/NoticeFunsystem';
import UtilityHeader from '@/components/common/Header/UtilityHeader';
import { useRouter } from 'next/router';
import { getKor } from '../CategoryMapping';
import {
  getFunsystemInfoAPI,
  getFunsystemInfoCommentAPI,
  postFunsystemCommentAPI,
} from '@/apis/funsystemAPIs';
import {
  getNoticeInfoAPI,
  getNoticeInfoCommentAPI,
  postNoticeCommentAPI,
} from '@/apis/noticeAPIs';

const NoticeInfo = () => {
  const [data, setData] = useState<NoticeInfoProps>();
  const [comments, setComments] = useState<Comments[]>();
  const [share, setShare] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const handleShareClick = () => {
    setShare(!share);
  };

  // 현재 주소 값
  const router = useRouter();
  const path = router.asPath;
  const pathId = router.query.id;

  function extractCategoryFromUrl(url: string): string | null {
    const regex = /\/(funsystem|notice|community)\/(\d+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  useEffect(() => {
    // 공지사항 API 연결
    if (extractCategoryFromUrl(path) === 'notice') {
      const getNoticeInfo = getNoticeInfoAPI(Number(pathId));
      getNoticeInfo.then((res) => {
        setData(res.data);
      });

      const getcomments = getNoticeInfoCommentAPI(Number(pathId));
      getcomments.then((res) => {
        setComments(res.data);
      });
    }

    // 펀시스템 API 연결
    if (extractCategoryFromUrl(path) === 'funsystem') {
      const getFunsystemInfo = getFunsystemInfoAPI(Number(pathId));
      getFunsystemInfo.then((res) => {
        setData(res.data);
      });

      const getFunsystemComments = getFunsystemInfoCommentAPI(Number(pathId));
      getFunsystemComments.then((res) => {
        setComments(res.data);
      });
    }
  }, []);

  // 클립보드에 링크 복사
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        'https://www.daitssu.com' + router.asPath,
      );
    } catch (e) {}
  };

  // 댓글 작성 API
  const handleOnClickEnrollComment = async () => {
    try {
      // 공지사항 API 연결
      if (extractCategoryFromUrl(path) === 'notice') {
        await postNoticeCommentAPI(Number(pathId), input);

        const getNoticeInfo = getNoticeInfoAPI(Number(pathId));
        getNoticeInfo.then((res) => {
          setData(res.data);
        });

        const getcomments = getNoticeInfoCommentAPI(Number(pathId));
        getcomments.then((res) => {
          setComments(res.data);
        });
      }

      // 펀시스템 API 연결
      if (extractCategoryFromUrl(path) === 'funsystem') {
        await postFunsystemCommentAPI(Number(pathId), input);

        const getFunsystemInfo = getFunsystemInfoAPI(Number(pathId));
        getFunsystemInfo.then((res) => {
          setData(res.data);
        });

        const getFunsystemComments = getFunsystemInfoCommentAPI(Number(pathId));
        getFunsystemComments.then((res) => {
          setComments(res.data);
        });
      }
      await postNoticeCommentAPI(Number(pathId), input);
      // 공지사항 API 연결
      if (extractCategoryFromUrl(path) === 'notice') {
        const getNoticeInfo = getNoticeInfoAPI(Number(pathId));
        getNoticeInfo.then((res) => {
          setData(res.data);
        });

        const getcomments = getNoticeInfoCommentAPI(Number(pathId));
        getcomments.then((res) => {
          setComments(res.data);
        });
      }

      // 펀시스템 API 연결
      if (extractCategoryFromUrl(path) === 'funsystem') {
        const getFunsystemInfo = getFunsystemInfoAPI(Number(pathId));
        getFunsystemInfo.then((res) => {
          setData(res.data);
        });

        const getFunsystemComments = getFunsystemInfoCommentAPI(Number(pathId));
        getFunsystemComments.then((res) => {
          setComments(res.data);
        });
      }
    } catch (e) {}
  };

  return (
    <styles.Container>
      <UtilityHeader child="공지사항" />
      <styles.InfoBox>
        <styles.TypeBox>
          {data !== undefined && getKor(data?.category)}
        </styles.TypeBox>
        <styles.TitleBox>{data?.title}</styles.TitleBox>
        <styles.MiddleBox>
          <styles.DateBox>
            <Image
              src={Calendar}
              alt="date image"
              width={18}
              height={18}
              priority
            />
            <span>{data?.createdAt.slice(0, 10)}</span>
          </styles.DateBox>
          <styles.WatchBox>
            <Image
              src={SmallHits}
              alt="watch count"
              width={18}
              height={18}
              priority
            />
            <span>{data?.views}</span>
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
                  <styles.DropdownTextBox onClick={handleCopyClipBoard}>
                    url 복사
                  </styles.DropdownTextBox>
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
        <styles.ContentBox>{data?.content}</styles.ContentBox>
        {data?.fileUrl !== undefined && data?.fileUrl.length !== 0 && (
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
      {comments?.map((comment) => {
        return (
          <Comment
            key={comment.commentId}
            nickname={comment.nickname}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            content={comment.content}
            commentId={comment.commentId}
            originalCommentId={comment.originalCommentId}
            userId={comment.userId}
          />
        );
      })}
      <CommentInput
        input={input}
        setInput={setInput}
        EnrollFunc={() => {
          handleOnClickEnrollComment();
        }}
      />
    </styles.Container>
  );
};

export default NoticeInfo;
