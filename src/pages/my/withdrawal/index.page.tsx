import Header from '@/components/common/Header/Header';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import Withdrawal from '@/components/myPage/withdrawal/Withdrawal';

export default function Home() {
  return (
    <>
      <Header />
      <Withdrawal />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
