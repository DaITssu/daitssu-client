import * as styles from './FindAuth.styles';
import { useRouter } from 'next/router';

//TODO: 라우터 맞게 수정
export default function FindAuth() {
  const router = useRouter();

  const handleClickBtn = (type: 'find' | 'signup') => {
    if (type === 'find') {
      router.push('/login/findAccount');
    } else if (type === 'signup') {
      router.push('/register');
    }
  };

  return (
    <styles.FindAuthContainer>
      <styles.FindIDPasswordBtn onClick={() => handleClickBtn('find')}>
        아이디/비밀번호 찾기
      </styles.FindIDPasswordBtn>
      {/* <styles.SignUpBtn onClick={() => handleClickBtn('signup')}>
        회원가입
      </styles.SignUpBtn> */}
    </styles.FindAuthContainer>
  );
}
