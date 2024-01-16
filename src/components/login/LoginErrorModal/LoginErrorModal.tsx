import * as styles from './LoginErrorModal.styles';
import Button from '@/components/common/Button';

interface LoginErrorModalProps {
  message?: string;
  close?: () => void;
}
export default function LoginErrorModal({
  message,
  close,
}: LoginErrorModalProps) {
  return (
    <styles.ModalContainer>
      <styles.ModalMessage>
        {message || '로그인에 실패했습니다.'}
      </styles.ModalMessage>
      <Button label="확인" width={326} height={51} onClick={close} />
    </styles.ModalContainer>
  );
}
