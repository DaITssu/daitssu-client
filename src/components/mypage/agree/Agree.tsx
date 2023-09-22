import Button from '@/components/common/Button';
import * as styles from './Agree.style';
import AgreeText from './AgreeText';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import Image from 'next/image';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';

const Agree = () => {
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

  return (
    <>
      <div style={{ height: '46px' }}> 헤더자리</div>
      <styles.FlexBox>
        <styles.TopBox>
          <styles.ContainCheckBox>
            <styles.CheckBox
              onClick={() => {
                handleOnClickCheck(0);
              }}
            >
              {agreeArray[0] ? (
                <Image
                  src={CheckedRadio}
                  alt="check"
                  width={18}
                  height={18}
                  priority
                />
              ) : (
                <Image
                  src={DefaultRadio}
                  alt="uncheck"
                  width={18}
                  height={18}
                  priority
                />
              )}
            </styles.CheckBox>
            <AgreeText
              type="none"
              text="약관 전체 동의 (선택사항 모두 포함)"
              arrow={false}
            />
          </styles.ContainCheckBox>
        </styles.TopBox>
        <styles.MiddleBox />
        <styles.BottomBox>
          <styles.ContainCheckBox>
            <styles.CheckBox
              onClick={() => {
                handleOnClickCheck(1);
              }}
            >
              {agreeArray[1] ? (
                <Image
                  src={CheckedRadio}
                  alt="check"
                  width={18}
                  height={18}
                  priority
                />
              ) : (
                <Image
                  src={DefaultRadio}
                  alt="uncheck"
                  width={18}
                  height={18}
                  priority
                />
              )}
            </styles.CheckBox>
            <AgreeText type="compulsory" text="다잇슈 이용약관" arrow={true} />
          </styles.ContainCheckBox>
          <styles.ContainCheckBox>
            <styles.CheckBox
              onClick={() => {
                handleOnClickCheck(2);
              }}
            >
              {agreeArray[2] ? (
                <Image
                  src={CheckedRadio}
                  alt="check"
                  width={18}
                  height={18}
                  priority
                />
              ) : (
                <Image
                  src={DefaultRadio}
                  alt="uncheck"
                  width={18}
                  height={18}
                  priority
                />
              )}
            </styles.CheckBox>
            <AgreeText
              type="compulsory"
              text="개인정보 수집 및 이용약관"
              arrow={true}
            />
          </styles.ContainCheckBox>
          <styles.ContainCheckBox>
            <styles.CheckBox
              onClick={() => {
                handleOnClickCheck(3);
              }}
            >
              {agreeArray[3] ? (
                <Image
                  src={CheckedRadio}
                  alt="check"
                  width={18}
                  height={18}
                  priority
                />
              ) : (
                <Image
                  src={DefaultRadio}
                  alt="uncheck"
                  width={18}
                  height={18}
                  priority
                />
              )}
            </styles.CheckBox>
            <AgreeText type="select" text="제3자 정보 제공 동의" arrow={true} />
          </styles.ContainCheckBox>
        </styles.BottomBox>
        <styles.InfoBox>
          <p>회원님께서는 동의를 거부할 수 있습니다.</p>
          <p>단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.</p>
          <div style={{ height: '20px' }}></div>
          <p>약관동의 후 해당 서비스 사용이 가능합니다.</p>
        </styles.InfoBox>
        <styles.FinishButtonBox>
          <Button label="완료" width={358} />
        </styles.FinishButtonBox>
      </styles.FlexBox>
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};

export default Agree;
