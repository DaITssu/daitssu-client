import UtilityHeader from '@/components/common/Header/UtilityHeader';
import ServiceNoticeList from '@/components/myPage/ServiceNotice/ServiceNoticeList';

export default function Home() {
  return <>
    <UtilityHeader
      child = "서비스 공지사항"
    />
    <ServiceNoticeList/>
  </>
}
