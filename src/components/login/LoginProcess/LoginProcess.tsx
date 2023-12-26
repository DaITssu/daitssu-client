import * as styles from '../LoginLayout/LoginLayout.styles';
import * as ProcessStyles from './LoginProcess.styles';
import Loader from '@/components/common/Loader/Loader';
import UtilityHeader from '@/components/common/Header/UtilityHeader';

export default function LoginProcess() {
  return (
    <styles.LayoutContainer>
      <UtilityHeader child="로그인" />
      <styles.Content>
        <styles.LoginHeader>숭실대 통합 LOGIN</styles.LoginHeader>
        <Loader />
        <ProcessStyles.TextContainer>
          <ProcessStyles.ProcessTextMain>
            잠시만 기다려주세요.
          </ProcessStyles.ProcessTextMain>
          <ProcessStyles.ProcessTextSub>
            스마트캠퍼스 데이터를 동기화하는 중입니다.
          </ProcessStyles.ProcessTextSub>
        </ProcessStyles.TextContainer>
      </styles.Content>
    </styles.LayoutContainer>
  );
}
