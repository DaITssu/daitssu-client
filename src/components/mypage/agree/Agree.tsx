import Button from '@/components/common/Button';
import * as styles from './Agree.style';
import AgreeText from './AgreeText';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import Image from 'next/image';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import TosItem from '@/components/Register/TosItems/TosItem';
import TOS from '@/components/Register/TOS/TOS';

const Agree = () => {
  const [showModal, setShowModal] = useState(false);

  const [agreeArray, setAgreeArray] = useState([false, false, false, false]);
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;

  const handleOnClickCheck = (idx: number) => {
    if (idx === 0) {
      setAgreeArray([
        !agreeArray[0],
        !agreeArray[0],
        !agreeArray[0],
        !agreeArray[0],
      ]);
    } else {
      const updatedArray = [...agreeArray];
      updatedArray[idx] = !updatedArray[idx];
      setAgreeArray(updatedArray);
    }
  };

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
      <div style={{ height: '46px' }}> 헤더자리</div>
      <styles.FlexBox>
        <styles.Box>
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
        </styles.Box>
        <styles.MiddleBox />
        <styles.Box style={{ padding: '0 15px', marginTop: '5px' }}>
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
        <styles.InfoBox>
          <p>회원님께서는 동의를 거부할 수 있습니다.</p>
          <p>단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.</p>
          <div style={{ height: '20px' }}></div>
          <p>약관동의 후 해당 서비스 사용이 가능합니다.</p>
        </styles.InfoBox>
        <styles.FinishButtonBox>
          <styles.Box>
            <div style={{ height: '30px' }}></div>
            <styles.ConfirmButton
              isCheck={checkPrivacy && checkTermsOfUse ? true : false}
            >
              완료
            </styles.ConfirmButton>
          </styles.Box>
        </styles.FinishButtonBox>
      </styles.FlexBox>
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};

export default Agree;
