import * as styles from './FindAccountLayout.styles';
import { useRouter } from 'next/router';

export default function FindAccountLayout() {
  const router = useRouter();

  //TODO: 라우터 맞게 수정
  const handleClickFindButton = (type: 'ID' | 'Password') => {
    if (type === 'ID') router.push('/findId');
    if (type === 'Password') router.push('/findPassword');
  };

  return (
    <styles.FindAccountLayout>
      <styles.MessageContainer>
        <styles.FindAccountMessage>
          아이디/비밀번호 찾기
        </styles.FindAccountMessage>
        <styles.SubMessage>찾으려는 정보를 선택해주세요</styles.SubMessage>
      </styles.MessageContainer>
      <styles.FindButton
        onClick={() => {
          handleClickFindButton('ID');
        }}
      >
        아이디 찾기
      </styles.FindButton>
      <styles.FindButton
        onClick={() => {
          handleClickFindButton('Password');
        }}
      >
        비밀번호 찾기
      </styles.FindButton>
    </styles.FindAccountLayout>
  );
}
