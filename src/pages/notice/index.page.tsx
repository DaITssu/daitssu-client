import Main from '@/components/main';
import TopTab from '@/components/notice/TopTab';
import MainLayout from '../layout';

export default function Home() {
  return (
    <MainLayout>
      <TopTab type="공지사항" />
    </MainLayout>
  );
}
