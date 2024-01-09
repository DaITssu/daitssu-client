import UtilityHeader from '@/components/common/Header/UtilityHeader';
import ServiceNoticeInfo from '@/components/myPage/ServiceNotice/info/ServiceNoticeInfo';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { title, content, createdAt } = router.query;
  return (
    <>
      <UtilityHeader child="서비스 공지사항" />
      <ServiceNoticeInfo
        title={title as string}
        content={content as string}
        createdAt={createdAt as string}
      />
    </>
  );
}
