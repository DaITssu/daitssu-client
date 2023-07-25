import * as styles from './Comment.style';
import Image from 'next/image';

const Comment = () => {
  return (
    <styles.CommentWhiteBox>
      <styles.CLeftBox>
        <Image
          src="/noticeInfo/profile.svg"
          alt="profile image"
          width={40}
          height={40}
          priority
        />
      </styles.CLeftBox>
      <styles.CRightBox>
        <styles.CTopBox>
          <styles.NicknameBox>닉네임</styles.NicknameBox>
          <styles.TimeBox>5분 전</styles.TimeBox>
          <styles.OtherBox>
            <styles.MessageBox>
              <Image
                src="/noticeInfo/message.svg"
                alt="message image"
                width={18}
                height={18}
                priority
              />
            </styles.MessageBox>
            <styles.ReportBox>
              <Image
                src="/noticeInfo/report.svg"
                alt="report image"
                width={18}
                height={18}
                priority
              />
            </styles.ReportBox>
          </styles.OtherBox>
        </styles.CTopBox>
        <styles.CommentContentBox>같이 힘냅시다!</styles.CommentContentBox>
      </styles.CRightBox>
    </styles.CommentWhiteBox>
  );
};

export default Comment;
