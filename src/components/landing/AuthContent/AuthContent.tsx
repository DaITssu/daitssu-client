import * as styles from './AuthContent.style';

import { useRouter } from 'next/router';

const AuthContent = () => {
  const router = useRouter();

  const handleClickLoginBtn = () => {
    router.push('/login');
  };

  return (
    <styles.AuthContentContainer>
      <styles.LoginButton onClick={handleClickLoginBtn}>
        로그인
      </styles.LoginButton>
      <styles.AuthCheckBtnContainer>
        <styles.AuthCheckBtn
          onClick={() => {
            window.open('https://lms.ssu.ac.kr/login');
          }}
        >
          아이디/비밀번호 찾기
        </styles.AuthCheckBtn>
      </styles.AuthCheckBtnContainer>
    </styles.AuthContentContainer>
  );
};

export default AuthContent;
