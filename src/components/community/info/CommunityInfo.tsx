import * as styles from './CommunityInfo.style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import CommentInput from '@/components/common/Comment/CommentInput';
import Category from '@/components/common/Category';
import Sue from '@icons/icon/Icon18/Sue.svg';
import Ben from '@icons/icon/Icon18/Ben.svg';
import SamllHits from '@icons/icon/Icon18/SmallHits.svg';
import FilledLiked from '@icons/icon/Liked/FilledLiked.svg';
import DefaultLiked from '@icons/icon/Liked/DefaultLiked.svg';
import Commentsvg from '@icons/icon/Icon24/Comment.svg';
import FilledScarp from '@icons/icon/Scrap/FilledScrap.svg';
import DefaultScrap from '@icons/icon/Scrap/DefaultScrap.svg';
import {
  getCommunityInfoAPI,
  getCommunityInfoCommentAPI,
} from '@/apis/communityAPIS';
import { useRouter } from 'next/router';
import { Comments, NoticeInfoProps } from '@/types/NoticeFunsystem';
import UtilityHeader from '@/components/common/Header/UtilityHeader';
const CommunityInfo = () => {
  const [comments, setComments] = useState<Comments[]>();
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isScrap, setIsScrap] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  const handleScrapClick = () => {
    setIsScrap(!isScrap);
  };

  return (
    <styles.Container>
      <UtilityHeader child="커뮤니티" isCommunity={true} />
      <styles.InfoBox>
        <Category label="질문" BgColor={false} />
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
              <styles.NickNameBox>닉네임</styles.NickNameBox>
            </styles.ProfileTopBox>
            <styles.ProfileBottomBox>
              <styles.DateBox>2023/05/20</styles.DateBox>
              <styles.TimeBox>21:23</styles.TimeBox>
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
                  <styles.ViewCountBox>5회</styles.ViewCountBox>
                </styles.ViewBox>
              </styles.ProfileRightBox>
            </styles.ProfileBottomBox>
          </styles.ProfileCenterBox>
        </styles.ProfileBox>
        <styles.TitleBox>이거 어떻게 하는 거예요</styles.TitleBox>
        <styles.ContentBox>
          엄청나게 잘해서 A+를 받겠어~ 엄청나게 잘해서 A+를 받겠어~ 종강아
          어서와
        </styles.ContentBox>
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
            <styles.CountBox>5</styles.CountBox>
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
            <styles.CountBox>5</styles.CountBox>
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
            <styles.CountBox>0</styles.CountBox>
          </styles.IconCountBox>
        </styles.UnderBarBox>
      </styles.Padding>
      <styles.BottomBox>
        <styles.CommentTitleBox>댓글</styles.CommentTitleBox>
      </styles.BottomBox>

      <CommentInput />
    </styles.Container>
  );
};

export default CommunityInfo;
