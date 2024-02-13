import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import ScrapList from '@/components/myPage/Scrap/ScrapList';

export default function Home() {
  return (
    <>
      <ScrapList />
      <ScrapList />
      <ScrapList />
      <NavigationBar focusType={'MY_PAGE'} />
    </>
  );
}
