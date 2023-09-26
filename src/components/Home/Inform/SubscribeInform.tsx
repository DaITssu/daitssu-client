import { InformComponent } from './InformComponent';
import MegaPhone from '@icons/icon/Inform/megaphone.svg';
import Image from 'next/image';

export const SubscribeInform = () => {
  return (
    <>
      <InformComponent
        icon={<Image src={MegaPhone} alt="공지" width={24} height={24} />}
        title="공지사항"
        type="학부"
        time={3}
        detail='데이터통신 "12주차 강의"'
      />
      <InformComponent
        icon={<Image src={MegaPhone} alt="공지" width={24} height={24} />}
        title="공지사항"
        type="장학"
        time={3}
        detail="2022 성적 장학금 신청 안내"
      />
      <InformComponent
        icon={<Image src={MegaPhone} alt="공지" width={24} height={24} />}
        title="펀시스템"
        type="none"
        time={3}
        detail="2022 성적 장학금 신청 안내"
      />
    </>
  );
};
