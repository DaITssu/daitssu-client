import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import BlockAccount from '@/components/myPage/blockAccount/blockAccount';
import Setting from '@/components/myPage/setting/setting';

export default function Home() {
  return (
    <>
      <Header />
      <BlockAccount />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
