import UtilityHeader from '@/components/common/Header/UtilityHeader';
import Setting from '@/components/myPage/setting/setting';

export default function Home() {
  return (
    <>
      <UtilityHeader child="설정" />
      <Setting />
    </>
  );
}
