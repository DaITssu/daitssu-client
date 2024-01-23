import * as styles from './Comment.style';
import Image from 'next/image';
import Profile from '@icons/icon/Icon24/profile.svg';
import CommentIcon from '@icons/icon/Icon24/Comment.svg';
import Report from '@icons/icon/Icon18/report.svg';
import { useState } from 'react';
import { beforeTime } from '@/utils/time';

interface CProps {
  userId: number;
  commentId: number;
  originalCommentId: number | null;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

interface TimeDifferenceProps {
  targetTime: string;
}

const Comment = ({
  userId,
  commentId,
  originalCommentId,
  nickname,
  createdAt,
  updatedAt,
  content,
}: CProps) => {
  const [difference, setDifference] = useState<number | null>(null);
  return (
    <styles.CommentWhiteBox padding={originalCommentId === null}>
      <styles.CLeftBox>
        <Image
          src={Profile}
          alt="profile image"
          width={40}
          height={40}
          priority
        />
      </styles.CLeftBox>
      <styles.CRightBox>
        <styles.CTopBox>
          <styles.NicknameBox>{nickname}</styles.NicknameBox>
          <styles.TimeBox>{beforeTime(createdAt)} </styles.TimeBox>
          <styles.OtherBox>
            <styles.MessageBox>
              <Image
                src={CommentIcon}
                alt="message image"
                width={18}
                height={18}
                priority
              />
            </styles.MessageBox>
            <styles.ReportBox>
              <Image
                src={Report}
                alt="report image"
                width={18}
                height={18}
                priority
              />
            </styles.ReportBox>
          </styles.OtherBox>
        </styles.CTopBox>
        <styles.CommentContentBox>{content}</styles.CommentContentBox>
      </styles.CRightBox>
    </styles.CommentWhiteBox>
  );
};

export default Comment;
