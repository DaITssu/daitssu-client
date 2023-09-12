import Button from '@/components/common/Button';
import * as styles from './AgreeInfo.style';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import AgreeText from '../AgreeText';

const AgreeInfo = () => {
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
          <div style={{ padding: '12px 15px' }}>다잇슈 이용약관</div>
        </styles.TopBox>
        <styles.MiddleBox />
        <styles.BottomBox></styles.BottomBox>
        <styles.InfoBox></styles.InfoBox>
        <styles.FinishButtonBox>
          <Button label="동의하기" width={358} />
        </styles.FinishButtonBox>
      </styles.FlexBox>
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};

export default AgreeInfo;
