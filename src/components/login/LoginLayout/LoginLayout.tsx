import { useState } from 'react';
import * as styles from './LoginLayout.styles';

import InputBox from '@/components/common/InputBox/InputBox';
import AutoLogon from '../AutoLogon/AutoLogon';
import Button from '@/components/common/Button';
import FindAuth from '../FindAuth/FindAuth';

export default function LoginLayout() {
  const [ID, setID] = useState<number>();
  const [password, setPassword] = useState<string>('');
  const [isSelectedAutoLogon, setIsSelectedAutoLogon] =
    useState<boolean>(false);

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
        <AutoLogon
          isSelected={isSelectedAutoLogon}
          setIsSelected={setIsSelectedAutoLogon}
        />
        <Button label="로그인" height={51} />
        <FindAuth />
      </styles.Content>
    </styles.LayoutContainer>
  );
}
