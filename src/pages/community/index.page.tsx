import CommunityList from '@/components/community/list/CommunityList';
import MainLayout from '../layout';

export default function Home() {
  return (
    <MainLayout>
      <CommunityList isButtonVisible={true} search="" />
    </MainLayout>
  );
}
