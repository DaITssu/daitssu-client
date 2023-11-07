import Image from 'next/image';
import Assignment from '@icons/icon/Inform/assignment.svg';
import Lecture from '@icons/icon/Inform/lecture.svg';
import Post from '@icons/icon/Inform/post.svg';
import { InformComponent } from './InformComponent';

export const NewNews = () => {
  return (
    <>
      <InformComponent
        icon={<Image src={Lecture} alt="강의" width={24} height={24} />}
        title="오늘 마감인 강의가 있어요!"
        type="none"
        time={3}
        detail='데이터통신 "12주차 강의"'
      />
      <InformComponent
        icon={<Image src={Post} alt="게시물" width={24} height={24} />}
        title="인기 게시판"
        type="none"
        time={3}
        detail="이번주 가장 인기있는 글을 확인해보세요!"
      />
      <InformComponent
        icon={<Image src={Assignment} alt="과제" width={24} height={24} />}
        title="오늘 마감인 과제가 있어요!"
        type="none"
        time={3}
        detail='데이터통신 "중간고사 요약 과제"'
      />
    </>
  );
};
