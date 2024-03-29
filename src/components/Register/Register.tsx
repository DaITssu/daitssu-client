import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import * as styles from './Register.styles';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';

import Image from 'next/image';
import TosItem from './TosItems/TosItem';
import TOS from './TOS/TOS';
import { UserInfoResponse } from '@/types/Auth';
import { getUserInfoAPI, checkUserNickname, signUpAPI } from '@/apis/authAPIS';

const Register = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfoResponse>();
  const [showModal, setShowModal] = useState(false);

  const [nickname, setNickname] = useState<string>('');
  const [isDuplicatedNickname, setIsDuplicatedNickname] =
    useState<boolean>(false);

  const [checkNickname, setCheckNickName] = useState<boolean>(false);
  const [checkAllAgree, setCheckAllAgree] = useState<boolean>(false);
  const [checkPrivacy, setCheckPrivacy] = useState<boolean>(false);
  const [checkTermsOfUse, setCheckTermsOfUse] = useState<boolean>(false);
  const [checkThirdPartyInfo, setCheckThirdPartyInfo] =
    useState<boolean>(false);

  const [currentAgreement, setCurrentAgreement] = useState({
    title: '',
    onAgree: () => {},
  });

  function handleAllAgreeChange(newValue: boolean) {
    setCheckAllAgree(newValue);
    setCheckPrivacy(newValue);
    setCheckTermsOfUse(newValue);
    setCheckThirdPartyInfo(newValue);
  }

  const handleClickNicknameBtn = () => {
    const response = checkUserNickname(nickname);
    response.then((res) => {
      if (res === 200) {
        setCheckNickName(true);
        setIsDuplicatedNickname(false);
      } else {
        setCheckNickName(false);
        setIsDuplicatedNickname(true);
      }
    });
  };

  const handleClickConfirmButton = () => {
    const response = signUpAPI(
      nickname,
      userInfo?.data?.name || '',
      userInfo?.data?.department || '',
      userInfo?.data?.studentId || '',
      Number(userInfo?.data?.term[4]),
    );
    response
      .then((res) => {
        if (res?.code === 0) {
          router.push(
            {
              pathname: '/login',
              query: {
                message: '회원가입에 성공했습니다.',
              },
            },
            '/login',
          );
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        router.push(
          {
            pathname: '/login',
            query: {
              message: '회원가입에 실패했습니다.',
            },
          },
          '/login',
        );
      });
  };

  useEffect(() => {
    if (checkPrivacy && checkTermsOfUse && checkThirdPartyInfo) {
      setCheckAllAgree(true);
    } else {
      setCheckAllAgree(false);
    }
  }, [checkPrivacy, checkTermsOfUse, checkThirdPartyInfo]);

  useEffect(() => {
    const response = getUserInfoAPI(
      String(query?.studentId),
      String(query?.password),
    );
    response.then((res) => {
      setUserInfo(res);
    });
  }, []);

  return (
    <>
      <styles.RegisterContainer>
        <styles.Box>
          <styles.BoxHeaderText>
            다잇슈에서 사용할 닉네임을 정해주세요.
          </styles.BoxHeaderText>
          <styles.BoxInnerText>닉네임</styles.BoxInnerText>
          <div style={{ position: 'relative', marginBottom: '5px' }}>
            <styles.RegisterNickNameInput
              isDuplicated={isDuplicatedNickname}
              checkNickname={checkNickname}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setCheckNickName(false);
              }}
            />
            <styles.RegisterNickNameInputButton
              onClick={handleClickNicknameBtn}
            >
              중복확인
            </styles.RegisterNickNameInputButton>
          </div>
          {isDuplicatedNickname && (
            <styles.WarningText>
              중복된 닉네임입니다. 다시 입력하세요
            </styles.WarningText>
          )}
          {!isDuplicatedNickname && checkNickname ? (
            <styles.CompleteText>사용가능한 닉네임입니다.</styles.CompleteText>
          ) : (
            <></>
          )}
        </styles.Box>
        <div style={{ height: '16px' }}></div>
        <styles.Box>
          <styles.BoxHeaderText>회원 정보를 확인해주세요</styles.BoxHeaderText>
          <styles.BoxInnerText>이름</styles.BoxInnerText>
          <styles.RegisterTextArea>
            {userInfo?.data?.name}
          </styles.RegisterTextArea>
          <styles.BoxInnerText>학부</styles.BoxInnerText>
          <styles.RegisterTextArea>
            {userInfo?.data?.department}
          </styles.RegisterTextArea>
          <styles.BoxInnerText>학번</styles.BoxInnerText>
          <styles.RegisterTextArea>
            {userInfo?.data?.studentId}
          </styles.RegisterTextArea>
          <styles.BoxInnerText>학년/학기</styles.BoxInnerText>
          <styles.RegisterTextArea>
            {userInfo?.data?.term}
          </styles.RegisterTextArea>
        </styles.Box>
        <div style={{ height: '16px' }}></div>
        <styles.Box>
          <styles.BoxHeaderText>약관 동의</styles.BoxHeaderText>
          <styles.TosItemStyle>
            <styles.TosItemImageDiv
              onClick={() => {
                handleAllAgreeChange(!checkAllAgree);
              }}
            >
              {checkAllAgree ? (
                <Image src={CheckedRadio} alt="DefaultRadio" />
              ) : (
                <Image src={DefaultRadio} alt="CheckRadio" />
              )}
            </styles.TosItemImageDiv>
            <div style={{ width: '12px' }}></div>
            <styles.BoxHeaderText>
              약관 전체 동의 (선택사항 모두 포함)
            </styles.BoxHeaderText>
          </styles.TosItemStyle>
          <TosItem
            isChecked={checkPrivacy}
            onCheckboxClick={() => setCheckPrivacy((res) => !res)}
            text=" 다잇슈 이용약관"
            onArrowClick={() => {
              setCurrentAgreement({
                title: '다잇슈 이용약관',
                onAgree: () => {
                  setCheckPrivacy(true);
                },
              });
              setShowModal(true);
            }}
          />
          <TosItem
            isChecked={checkTermsOfUse}
            onCheckboxClick={() => setCheckTermsOfUse((res) => !res)}
            text=" 개인정보 수집 및 이용약관"
            onArrowClick={() => {
              setCurrentAgreement({
                title: '개인정보 수집 및 이용약관',
                onAgree: () => {
                  setCheckTermsOfUse(true);
                },
              });
              setShowModal(true);
            }}
          />
          <TosItem
            isChecked={checkThirdPartyInfo}
            onCheckboxClick={() => setCheckThirdPartyInfo((res) => !res)}
            text=" 제3자 정보 제공 동의"
            isEssential={false}
            onArrowClick={() => {
              setCurrentAgreement({
                title: '제3자 정보 제공 동의',
                onAgree: () => {
                  setCheckThirdPartyInfo(true);
                },
              });
              setShowModal(true);
            }}
          />
          <styles.WarningText>
            회원님께서는 동의를 거부할 수 있습니다.
            <br /> 단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.
            <br />
            <br /> 약관동의 후 해당 서비스 사용이 가능합니다.
          </styles.WarningText>
        </styles.Box>
        <styles.Box>
          <div style={{ height: '30px' }}></div>
          <styles.ConfirmButton
            isCheck={
              checkPrivacy && checkNickname && checkTermsOfUse ? true : false
            }
            onClick={handleClickConfirmButton}
            disabled={
              checkPrivacy && checkNickname && checkTermsOfUse ? false : true
            }
          >
            완료
          </styles.ConfirmButton>
        </styles.Box>
        {showModal && (
          <TOS
            title={currentAgreement.title}
            onAgree={currentAgreement.onAgree}
            closeModal={() => {
              setShowModal(false);
            }}
          />
        )}
      </styles.RegisterContainer>
    </>
  );
};
export default Register;
