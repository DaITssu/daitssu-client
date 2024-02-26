import * as styles from '../Post/Mypost.style';
import Category from '@/components/common/Category';
import Image from 'next/image';
import DefaultCheckBox from '@icons/icon/CheckBox/DefaultCheckBox.svg';
import CheckedBox from '@icons/icon/CheckBox/BlueCheckedBox.svg';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { commentsAtom } from '@/states/useComments';
import { MPCommentsProps } from './MyComment';

const CommentList = ({
  commentId,
  userId,
  content,
  originalCommentId,
  createdAt,
  updatedAt,
  title,
  topic,
  articleId,
}: MPCommentsProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [comments, setComments] = useAtom(commentsAtom);

  const handleUnChecked = (removeId: number) => {
    setComments(comments.filter((id) => id !== removeId));
  };

  return (
    <styles.FlexBox>
      <styles.LeftBox>
        <styles.CheckBox>
          {isChecked ? (
            <Image
              src={CheckedBox}
              alt="check"
              width={15}
              height={15}
              onClick={() => {
                setIsChecked(!isChecked);
                handleUnChecked(commentId);
              }}
            />
          ) : (
            <Image
              src={DefaultCheckBox}
              alt="check"
              width={15}
              height={15}
              onClick={() => {
                setIsChecked(!isChecked);
                setComments([...comments, commentId]);
              }}
            />
          )}
        </styles.CheckBox>
      </styles.LeftBox>
      <styles.RightBox>
        <styles.TopBox>
          <styles.TagBox>
            <Category label={topic} BgColor={false} />
          </styles.TagBox>
          <styles.PostInfoBox>
            <styles.PostTitleBox>{title}</styles.PostTitleBox>
            <styles.PostCommentText>&nbsp;에 남긴 댓글</styles.PostCommentText>
          </styles.PostInfoBox>
        </styles.TopBox>
        <styles.MyCommentText>{content}</styles.MyCommentText>
        <styles.BottomBox></styles.BottomBox>
      </styles.RightBox>
    </styles.FlexBox>
  );
};

export default CommentList;
