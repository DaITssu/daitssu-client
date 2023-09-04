import Button from '@/components/common/Button';
import * as styles from './Agree.style';
import AgreeText from './AgreeText';

const Agree = () => {
  return (
    <>
      <styles.FlexBox>
        <styles.TopBox>
          <AgreeText
            type="none"
            text="약관 전체 동의 (선택사항 모두 포함)"
            arrow={false}
          />
        </styles.TopBox>
        <styles.MiddleBox />
        <styles.BottomBox>
          <AgreeText type="compulsory" text="다잇슈 이용약관" arrow={true} />
          <AgreeText
            type="compulsory"
            text="개인정보 수집 및 이용약관"
            arrow={true}
          />
          <AgreeText type="select" text="제3자 정보 제공 동의" arrow={true} />
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
    </>
  );
};

export default Agree;
