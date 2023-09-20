import * as styles from './Mypost.style';
import Category from '@/components/common/Category';
import Image from 'next/image';
import DefaultCheckBox from '@icons/icon/CheckBox/DefaultCheckBox.svg';
import CheckedBox from '@icons/icon/CheckBox/BlueCheckedBox.svg';
import { useState } from 'react';

const MyComment = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
              }}
            />
          )}
        </styles.CheckBox>
      </styles.LeftBox>
      <styles.RightBox>
        <styles.TopBox>
          <styles.TagBox>
            <Category label="질문" BgColor={false} />
          </styles.TagBox>
          <styles.PostInfoBox>
            <styles.PostTitleBox>오늘 학교 가는 분?</styles.PostTitleBox>
            <styles.PostCommentText>&nbsp;에 남긴 댓글</styles.PostCommentText>
          </styles.PostInfoBox>
        </styles.TopBox>
        <styles.MyCommentText>서점에</styles.MyCommentText>
        <styles.BottomBox></styles.BottomBox>
      </styles.RightBox>
    </styles.FlexBox>
  );
};

export default MyComment;
