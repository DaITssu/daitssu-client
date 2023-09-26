import Image from 'next/image';

import * as styles from './ConfirmRegister.styles';
import { useRouter } from 'next/router';
import BackgroundImg from '@images/landing_background.png';
import LogoImage from '@icons/logo/landing_logo2.png';
import CheckImage from '@icons/logo/landing_check.png';

export default function ConfirmRegister() {
  const router = useRouter();

  function onClickConfirm() {
    router.push('/login');
  }

  return (
    <styles.ConfirmRegisterLayout>
      <Image
        src={BackgroundImg.src}
        alt="배경이미지"
        fill
        style={{ objectFit: 'cover' }}
      />
      <styles.ConfirmRegisterContainer>
        <styles.EmptyContainer />
        <styles.EmptyContainer>
          <Image src={CheckImage} width={60} height={60} alt="체크표시" />
          <Image src={LogoImage} width={200} height={70} alt="다잇슈 로고" />
          <styles.ExplainText>
            회원가입 완료! <br />
            다잇슈에 오신 것을 환영합니다.
          </styles.ExplainText>
        </styles.EmptyContainer>
        <styles.ConfirmButton onClick={onClickConfirm}>
          완료
        </styles.ConfirmButton>
      </styles.ConfirmRegisterContainer>
    </styles.ConfirmRegisterLayout>
  );
}
