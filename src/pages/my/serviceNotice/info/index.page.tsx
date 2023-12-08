import UtilityHeader from '@/components/common/Header/UtilityHeader';
import ServiceNoticeInfo from '@/components/myPage/ServiceNotice/info/ServiceNoticeInfo';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { title, contents, date } = router.query;
  return <>
    <UtilityHeader
      child = "서비스 공지사항"
    />
    <ServiceNoticeInfo title={title as string} 
      content={contents as string} 
      date={date as string}/>
  </>
}
