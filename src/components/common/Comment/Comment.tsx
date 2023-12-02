import * as styles from './Comment.style';
import Image from 'next/image';
import Profile from '@icons/icon/Icon24/profile.svg';
import CommentIcon from '@icons/icon/Icon24/Comment.svg';
import Report from '@icons/icon/Icon18/report.svg';
import { useEffect, useState } from 'react';

interface CProps {
  nickname: string;
  time: string;
  content: string;
  type: null | number;
}

interface TimeDifferenceProps {
  targetTime: string;
}

const Comment = ({ nickname, time, content, type = null }: CProps) => {
  const [difference, setDifference] = useState<number | null>(null);
  const TimeDifference: React.FC<TimeDifferenceProps> = ({ targetTime }) => {
    const getFormattedTimeDifference = (
      target: Date,
      current: Date,
    ): string => {
      const timeDiffInMinutes = Math.floor(
        (current.getTime() - target.getTime()) / (1000 * 60),
      );

      if (timeDiffInMinutes >= 1 && timeDiffInMinutes <= 59) {
        return `${timeDiffInMinutes}분 전`;
      } else if (timeDiffInMinutes >= 60 && timeDiffInMinutes <= 1439) {
        const hours = Math.floor(timeDiffInMinutes / 60);
        return `${hours}시간 전`;
      } else if (timeDiffInMinutes >= 1440) {
        const days = Math.floor(timeDiffInMinutes / 1440);
        return `${days}일 전`;
      } else {
        return '방금 전';
      }
    };

    const targetDate = new Date(targetTime);
    const currentDate = new Date();

    const formattedTimeDifference = getFormattedTimeDifference(
      targetDate,
      currentDate,
    );

    return <div>{formattedTimeDifference}</div>;
  };
  return (
    <styles.CommentWhiteBox>
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
          <styles.TimeBox>
            <TimeDifference targetTime={time} />
          </styles.TimeBox>
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
