import Category from '@/components/common/Category';
import * as styles from './ScrapList.style';
import Image from 'next/image';
import DefaultCheckBox from '@icons/icon/CheckBox/DefaultCheckBox.svg';
import CheckedBox from '@icons/icon/CheckBox/BlueCheckedBox.svg';
import Comment from '@icons/icon/Icon24/Comment.svg';
import { useState } from 'react';
import { beforeTime } from '@/utils/time';
import { MyPostProps } from '../Post/MyPost';

const ScrapList = ({
  id,
  topic,
  title,
  content,
  createdAt,
  commentSize,
}: MyPostProps) => {
  const [isChecked, setIsChecked] = useState(false);

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
              priority
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
              priority
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
            <Category label={topic} BgColor={false} />
          </styles.TagBox>
          <styles.TimeBox>{beforeTime(createdAt)}</styles.TimeBox>
        </styles.TopBox>
        <styles.TitleBox>{title}</styles.TitleBox>
        <styles.BottomBox>
          <styles.ContentBox>{content}</styles.ContentBox>
          <styles.MessageBox>
            <styles.MessageIconBox>
              <Image
                src={Comment}
                alt="comment"
                width={15}
                height={15}
                priority
              />
            </styles.MessageIconBox>
            <styles.MessageCntBox>{commentSize}</styles.MessageCntBox>
          </styles.MessageBox>
        </styles.BottomBox>
      </styles.RightBox>
    </styles.FlexBox>
  );
};

export default ScrapList;
