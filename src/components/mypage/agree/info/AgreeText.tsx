import * as styles from './AgreeInfo.style';
import Image from 'next/image';
import RightArrow from '@icons/icon/Arrow/RightBigArrow.svg';
interface ATProps {
  type: string;
  text: string;
  arrow: boolean;
  AllAgree?: boolean;
  check: boolean;
  agreeArray: Array<boolean>;
  setAgreeArray: Function;
}

const AgreeText = ({
  type,
  text,
  arrow,
  AllAgree,
  check,
  agreeArray,
  setAgreeArray,
}: ATProps) => {
  return (
    <>
      <styles.ContainBox>
        <styles.TypeBox type={type}>
          {type === 'compulsory' ? '(필수)' : type === 'select' ? '(선택)' : ''}
        </styles.TypeBox>
        <styles.TextBox>{text}</styles.TextBox>
      </styles.ContainBox>
      {arrow ? (
        <styles.ArrowBox>
          <Image
            src={RightArrow}
            alt="right arrow"
            width={18}
            height={18}
            priority
          />
        </styles.ArrowBox>
      ) : (
        ''
      )}
    </>
  );
};

export default AgreeText;
