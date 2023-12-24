import { useState } from 'react';
import { useRouter } from 'next/router';
import * as styles from './LoginLayout.styles';

import InputBox from '@/components/common/InputBox/InputBox';
import AutoLogon from '../AutoLogon/AutoLogon';
import Button from '@/components/common/Button';
import FindAuth from '../FindAuth/FindAuth';
import Modal from '@/components/common/Modal';
import LoginErrorModal from '../LoginErrorModal/LoginErrorModal';
import useModal from '@/components/common/Modal/useModal';

import LoginProcess from '../LoginProcess/LoginProcess';

import { signInAPI } from '@/apis/authAPIS';

export default function LoginLayout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [ID, setID] = useState<number>();
  const [password, setPassword] = useState<string>('');
  const [isSelectedAutoLogon, setIsSelectedAutoLogon] =
    useState<boolean>(false);

  //모달
  const { open, PopUp, close } = useModal();
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleClickAutoLogon = () => {
    setIsSelectedAutoLogon(!isSelectedAutoLogon);
  };

  const handleClickLoginBtn = () => {
    setIsLoading(true);
    const signInResponse = signInAPI(String(ID), password);
    signInResponse
      .then((res) => {
        if (res?.code === 0) {
          //로그인 성공
          setIsLoading(false);
          alert('로그인 성공');
        } else if (res?.code === 1001) {
          //회원가입
          router.push('/register');
        } else {
          //로그인 실패
          setIsLoading(false);
          setMessage(res?.message || '');
        }
      })
      .then(() => {
        open();
      });
  };

  return (
    <>
      {isLoading ? (
        <LoginProcess />
      ) : (
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
          <PopUp>
            <Modal onClose={close} title={''}>
              <LoginErrorModal message={message} close={close} />
            </Modal>
          </PopUp>
        </styles.LayoutContainer>
      )}
    </>
  );
}
