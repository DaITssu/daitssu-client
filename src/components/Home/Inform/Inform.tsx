import TwoTypeTab from '@/components/common/Tab/TwoTypeTab';
import * as styles from './Inform.style';
import MainLayout from '@/pages/layout';
import { ReactNode } from 'react';
import MegaPhone from '@icons/icon/Inform/megaphone.svg';
import Assignment from '@icons/icon/Inform/assignment.svg';
import Lecture from '@icons/icon/Inform/lecture.svg';
import Post from '@icons/icon/Inform/post.svg';

const Inform = () => {
  return (
    <MainLayout>
      <styles.HeadTitle>알림</styles.HeadTitle>
      <TwoTypeTab
        LeftTitle="새 소식"
        RightTitle="구독 알림"
        LeftComponent={<NewNews />}
        RightComponent={<SubscribeInform />}
      />
    </MainLayout>
  );
};

import Image from 'next/image';

const NewNews = () => {
  return (
    <>
      <InformComponent
        icon={<Image src={Lecture} alt="check" width={24} height={24} />}
        title="오늘 마감인 강의가 있어요!"
        type="none"
        time={3}
        detail='데이터통신 "12주차 강의"'
      />
      <InformComponent
        icon={<Image src={Post} alt="check" width={24} height={24} />}
        title="인기 게시판"
        type="none"
        time={3}
        detail="이번주 가장 인기있는 글을 확인해보세요!"
      />
      <InformComponent
        icon={<Image src={Assignment} alt="check" width={24} height={24} />}
        title="오늘 마감인 과제가 있어요!"
        type="none"
        time={3}
        detail='데이터통신 "중간고사 요약 과제"'
      />
    </>
  );
};

const SubscribeInform = () => {
  return (
    <>
      <InformComponent
        icon={<Image src={MegaPhone} alt="check" width={24} height={24} />}
        title="공지사항"
        type="학부"
        time={3}
        detail='데이터통신 "12주차 강의"'
      />
      <InformComponent
        icon={<Image src={MegaPhone} alt="check" width={24} height={24} />}
        title="공지사항"
        type="장학"
        time={3}
        detail="2022 성적 장학금 신청 안내"
      />
      <InformComponent
        icon={<Image src={MegaPhone} alt="check" width={24} height={24} />}
        title="펀시스템"
        type="none"
        time={3}
        detail="2022 성적 장학금 신청 안내"
      />
    </>
  );
};

interface ICProps {
  icon: ReactNode;
  type: '학부' | '장학' | 'none';
  title: string;
  time: number;
  detail: string;
}

const InformComponent = ({ icon, type, title, time, detail }: ICProps) => {
  return (
    <styles.ComponentContainer>
      <styles.LeftBox>{icon}</styles.LeftBox>
      <styles.RightBox>
        <styles.RightTopBox>
          <styles.TypeBox type={type}>
            {type === 'none' ? ' ' : type}
          </styles.TypeBox>
          <styles.TitleBox>{title}</styles.TitleBox>
          <styles.TimeBox>{time}분 전</styles.TimeBox>
        </styles.RightTopBox>
        <styles.RightBottomBox>{detail}</styles.RightBottomBox>
      </styles.RightBox>
    </styles.ComponentContainer>
  );
};

export default Inform;
