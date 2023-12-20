import { useState } from 'react';
import * as styles from './LoginLayout.styles';

import InputBox from '@/components/common/InputBox/InputBox';
import AutoLogon from '../AutoLogon/AutoLogon';
import Button from '@/components/common/Button';
import FindAuth from '../FindAuth/FindAuth';

import { signInAPI } from '@/apis/authAPIS';

export default function LoginLayout() {
  const [ID, setID] = useState<number>();
  const [password, setPassword] = useState<string>('');
  const [isSelectedAutoLogon, setIsSelectedAutoLogon] =
    useState<boolean>(false);

  const handleClickAutoLogon = () => {
    setIsSelectedAutoLogon(!isSelectedAutoLogon);
  };

  const handleClickLoginBtn = () => {
    const signInResponse = signInAPI(String(ID), password);
    signInResponse.then((res) => {
      console.log(res);
      if (res?.code === 1001) {
        alert('회원 정보를 찾을 수 없습니다.');
        setPassword('');
      } else if (res?.code === 0) {
        console.log('로그인 성공');
      }
    });
  };

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
          handleClickAutoLogon={handleClickAutoLogon}
        />
        <Button label="로그인" height={51} onClick={handleClickLoginBtn} />
        <FindAuth />
      </styles.Content>
    </styles.LayoutContainer>
  );
}
