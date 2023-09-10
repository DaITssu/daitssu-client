import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import BlockAccount from '@/components/myPage/blockAccount/BlockAccount';
import Setting from '@/components/myPage/setting/Setting';

export default function Home() {
  return (
    <>
      <Header />
      <BlockAccount />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
