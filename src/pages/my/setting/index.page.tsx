import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import Setting from '@/components/myPage/setting/Setting';

export default function Home() {
  return (
    <>
      <Header />
      <Setting />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
