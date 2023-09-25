import * as styles from './NeedLoginModal.styles';
import Button from '@/components/common/Button';

export default function NeedLoginModal() {
  return (
    <styles.ModalContainer>
      <styles.ModalMessage>로그인 후 이용 가능합니다.</styles.ModalMessage>
      <Button label="로그인" width={326} height={51} />
    </styles.ModalContainer>
  );
}
