import { useState } from 'react';
import * as styles from './LoginLayout.styles';
import InputBox from '@/components/common/InputBox/InputBox';

export default function LoginLayout() {
  const [ID, setID] = useState<number>();
  const [password, setPassword] = useState<string>('');

  return (
    <styles.LayoutContainer>
      <styles.Content>
        <styles.LoginHeader>숭실대 통합 LOGIN</styles.LoginHeader>
        <InputBox
          value={ID}
          setValue={setID}
          label="ID"
          type="number"
          placeholder="학번"
        />
        <InputBox
          value={password}
          setValue={setPassword}
          label="Password"
          type="password"
          placeholder="비밀번호"
        />
      </styles.Content>
    </styles.LayoutContainer>
  );
}
