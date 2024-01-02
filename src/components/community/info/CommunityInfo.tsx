import * as styles from './CommunityInfo.style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';
import Category from '@/components/common/Category';
import SamllHits from '@icons/icon/Icon18/SmallHits.svg';
import FilledLiked from '@icons/icon/Liked/FilledLiked.svg';
import DefaultLiked from '@icons/icon/Liked/DefaultLiked.svg';
import Commentsvg from '@icons/icon/Icon24/Comment.svg';
import FilledScarp from '@icons/icon/Scrap/FilledScrap.svg';
import DefaultScrap from '@icons/icon/Scrap/DefaultScrap.svg';
import {
  getCommunityInfoAPI,
  getCommunityInfoCommentAPI,
  postCommunityDislikeAPI,
  postCommunityLikeAPI,
  postCommunityScrapAPI,
} from '@/apis/communityAPIS';
import { useRouter } from 'next/router';
import { Comments } from '@/types/NoticeFunsystem';
import UtilityHeader from '@/components/common/Header/UtilityHeader';
import { CommunityInfoProps } from '@/types/Community';
const CommunityInfo = () => {
  const [data, setData] = useState<CommunityInfoProps>();
  const [comments, setComments] = useState<Comments[]>();
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isScrap, setIsScrap] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  // 현재 주소 값
  const router = useRouter();
  const path = router.asPath;
  const pathId = router.query.id;

  const handleLikeClick = () => {
    setIsLike(!isLike);
    if (!isLike) {
      postCommunityLikeAPI(Number(pathId));
    } else {
      postCommunityDislikeAPI(Number(pathId));
    }
  };

  const handleScrapClick = () => {
    setIsScrap(!isScrap);
    if (!isScrap) {
      postCommunityScrapAPI(Number(pathId), !isScrap);
    }
  };

  useEffect(() => {
    const getCommunityInfo = getCommunityInfoAPI(Number(pathId));
    getCommunityInfo.then((res) => {
      setData(res.data);
    });

    const getcomments = getCommunityInfoCommentAPI(Number(pathId));
    getcomments.then((res) => {
      setComments(res?.data);
    });
  }, []);

  return (
    <styles.Container>
      <UtilityHeader child="커뮤니티" isCommunity={true} />
      <styles.InfoBox>
        <Category label={data?.topic} BgColor={false} />
      </styles.InfoBox>
      <styles.Padding>
        <styles.ProfileBox>
          <styles.ProfileLeftBox>
            <Image
              src="/noticeInfo/profile.svg"
              alt="profile image"
              width={45}
              height={45}
              priority
            />
          </styles.ProfileLeftBox>
          <styles.ProfileCenterBox>
            <styles.ProfileTopBox>
              <styles.NickNameBox>{data?.writerNickName}</styles.NickNameBox>
            </styles.ProfileTopBox>
            <styles.ProfileBottomBox>
              <styles.DateBox>{data?.updatedAt.slice(0, 10)}</styles.DateBox>
              <styles.TimeBox>{data?.updatedAt.slice(11, 16)}</styles.TimeBox>
              <styles.ProfileRightBox>
                <styles.ViewBox>
                  <styles.ViewIconBox>
                    <Image
                      src={SamllHits}
                      alt="watch count"
                      width={17}
                      height={17}
                      priority
                    />
                  </styles.ViewIconBox>
                  <styles.ViewCountBox>{data?.views}</styles.ViewCountBox>
                </styles.ViewBox>
              </styles.ProfileRightBox>
            </styles.ProfileBottomBox>
          </styles.ProfileCenterBox>
        </styles.ProfileBox>
        <styles.TitleBox>{data?.title}</styles.TitleBox>
        <styles.ContentBox>{data?.content}</styles.ContentBox>
        <styles.UnderBarBox>
          <styles.IconCountBox>
            <styles.IconBox onClick={handleLikeClick}>
              {isLike ? (
                <Image
                  src={FilledLiked}
                  alt="heart icon"
                  width={24}
                  height={24}
                  priority
                />
              ) : (
                <Image
                  src={DefaultLiked}
                  alt="heart icon"
                  width={24}
                  height={24}
                  priority
                />
              )}
              {/** TODO: 눌렀을때 모양 변경 */}
            </styles.IconBox>
            <styles.CountBox>{data?.likes}</styles.CountBox>
          </styles.IconCountBox>
          <styles.IconCountBox>
            <styles.IconBox>
              <Image
                src={Commentsvg}
                alt="comment icon"
                width={24}
                height={24}
                priority
              />
            </styles.IconBox>
            <styles.CountBox>{data?.comments}</styles.CountBox>
          </styles.IconCountBox>
          <styles.IconCountBox>
            <styles.IconBox onClick={handleScrapClick}>
              {isScrap ? (
                <Image
                  src={FilledScarp}
                  alt="scarp icon"
                  width={24}
                  height={24}
                  priority
                />
              ) : (
                <Image
                  src={DefaultScrap}
                  alt="scrap icon"
                  width={24}
                  height={24}
                  priority
                />
              )}
            </styles.IconBox>
            <styles.CountBox>{data?.scrapCount}</styles.CountBox>
          </styles.IconCountBox>
        </styles.UnderBarBox>
      </styles.Padding>
      <styles.BottomBox>
        <styles.CommentTitleBox>댓글</styles.CommentTitleBox>
      </styles.BottomBox>
      {comments?.map((comment) => {
        return (
          <Comment
            key={comment.commentId}
            nickname={''}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            content={comment.content}
            commentId={comment.commentId}
            originalCommentId={comment.originalCommentId}
            userId={comment.userId}
          />
        );
      })}

      <CommentInput />
    </styles.Container>
  );
};

export default CommunityInfo;
