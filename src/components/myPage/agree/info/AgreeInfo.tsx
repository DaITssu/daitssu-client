import Button from '@/components/common/Button';
import * as styles from './AgreeInfo.style';
import NavigationBar from '@/components/common/Navbar/NavigationBar';
import { useRecoilValue } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import { useEffect, useState } from 'react';

const AgreeInfo = () => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;
  // add state
  const [url, setUrl] = useState<URL>();
  const [param, setParam] = useState<String | null>('');

  useEffect(() => {
    const url = new URL(window.location.href);
    setUrl(url);
    setParam(url?.searchParams.get('param'));
  }, []);

  return (
    <>
      <div style={{ height: '46px' }}> 헤더자리</div>
      <styles.FlexBox>
        <styles.TopBox>
          <div style={{ padding: '12px 15px' }}>{param}</div>
        </styles.TopBox>
        <styles.MiddleBox />
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
