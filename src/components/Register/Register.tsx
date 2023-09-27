import { useEffect, useState } from 'react';

import * as styles from './Register.styles';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';

import Image from 'next/image';
import TosItem from './TosItems/TosItem';
import TOS from './TOS/TOS';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const [nickname, setNickname] = useState<string>('');
  const [isDuplicatedNickname, setIsDuplicatedNickname] =
    useState<boolean>(false);

  const [checkNickname, setCheckNickName] = useState<boolean>(true);
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

  useEffect(() => {
    if (checkPrivacy && checkTermsOfUse && checkThirdPartyInfo) {
      setCheckAllAgree(true);
    } else {
      setCheckAllAgree(false);
    }
  }, [checkPrivacy, checkTermsOfUse, checkThirdPartyInfo]);

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
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <styles.RegisterNickNameInputButton
              onClick={() => {
                //TODO : 서버와 닉네임 중복확인
              }}
            >
              중복확인
            </styles.RegisterNickNameInputButton>
          </div>
          {isDuplicatedNickname && (
            <styles.WarningText>
              중복된 닉네임입니다. 다시 입력하세요
            </styles.WarningText>
          )}
        </styles.Box>
        <div style={{ height: '16px' }}></div>
        <styles.Box>
          <styles.BoxHeaderText>회원 정보를 확인해주세요</styles.BoxHeaderText>
          <styles.BoxInnerText>이름</styles.BoxInnerText>
          <styles.RegisterTextArea readOnly value="홍수민" />
          <styles.BoxInnerText>학부</styles.BoxInnerText>
          <styles.RegisterTextArea readOnly value="글로벌미디어학부" />
          <styles.BoxInnerText>학번</styles.BoxInnerText>
          <styles.RegisterTextArea readOnly value="20001212" />
          <styles.BoxInnerText>학년/학기</styles.BoxInnerText>
          <styles.RegisterTextArea readOnly value="2학년/3학기" />
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
            text=" 다있슈 이용약관"
            onArrowClick={() => {
              setCurrentAgreement({
                title: '다있슈 이용약관',
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
