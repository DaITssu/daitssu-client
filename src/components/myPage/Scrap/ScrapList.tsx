import * as styles from '@/components/myPage/Scrap/ScrapList.style';

const ScrapList = () => {
  return (
    <styles.FlexBox>
      <styles.TopBox>
        <styles.CheckBox></styles.CheckBox>
        <styles.TagBox></styles.TagBox>
        <styles.TimeBox></styles.TimeBox>
      </styles.TopBox>
      <styles.TitleBox>서점에</styles.TitleBox>
      <styles.BottomBox>
        <styles.ContentBox>서점에 이 책도 파나요?</styles.ContentBox>
        <styles.MessageBox>
          <styles.MessageIconBox></styles.MessageIconBox>
          <styles.MessageCntBox>5</styles.MessageCntBox>
        </styles.MessageBox>
      </styles.BottomBox>
    </styles.FlexBox>
  );
};

export default ScrapList;
