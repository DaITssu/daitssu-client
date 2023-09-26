import TwoTypeTab from '@/components/common/Tab/TwoTypeTab';
import * as styles from './Inform.style';
import MainLayout from '@/pages/layout';
import { NewNews } from './NewNews';
import { SubscribeInform } from './SubscribeInform';

const Inform = () => {
  return (
    <MainLayout>
      <styles.HeadTitle>알림</styles.HeadTitle>
      <TwoTypeTab
        LeftTitle="새 소식"
        RightTitle="구독 알림"
        LeftComponent={<NewNews />}
        RightComponent={<SubscribeInform />}
      />
    </MainLayout>
  );
};

export default Inform;
