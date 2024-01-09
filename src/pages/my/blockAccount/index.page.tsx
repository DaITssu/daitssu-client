import Header from '@/components/common/Header/Header';
import BlockAccount from '@/components/myPage/blockAccount/blockAccount';

export default function Home() {
  return (
    <>
      <Header />
      <BlockAccount />
      {/* <NavigationBar focusType={'MY_PAGE'} /> */}
    </>
  );
}
