import Category from '@/components/common/Category';
import * as styles from '@/components/myPage/Scrap/ScrapList.style';
import Image from 'next/image';

const ScrapList = () => {
  return (
    <styles.FlexBox>
      <styles.LeftBox>
        <styles.CheckBox>
          <Image
            src="/assets/icon/CheckBox/DefaultCheckBox.svg"
            alt="check"
            width={15}
            height={15}
            priority
          />
        </styles.CheckBox>
      </styles.LeftBox>
      <styles.RightBox>
        <styles.TopBox>
          <styles.TagBox>
            <Category label="잡담" BgColor={false} />
          </styles.TagBox>
          <styles.TimeBox>3분 전</styles.TimeBox>
        </styles.TopBox>
        <styles.TitleBox>서점에</styles.TitleBox>
        <styles.BottomBox>
          <styles.ContentBox>
            서점에 이 책도 파나요 서점에 이 책도 파나요 서점에 이 책도 파나요
          </styles.ContentBox>
          <styles.MessageBox>
            <styles.MessageIconBox>
              <Image
                src="/assets/icon/Icon24/Comment.svg"
                alt="comment"
                width={15}
                height={15}
                priority
              />
            </styles.MessageIconBox>
            <styles.MessageCntBox>5</styles.MessageCntBox>
          </styles.MessageBox>
        </styles.BottomBox>
      </styles.RightBox>
    </styles.FlexBox>
  );
};

export default ScrapList;
