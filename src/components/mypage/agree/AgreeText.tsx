import * as styles from './Agree.style';
import Image from 'next/image';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import RightArrow from '@icons/icon/Arrow/RightBigArrow.svg';
import { useState } from 'react';
interface ATProps {
  type: string;
  text: string;
  arrow: boolean;
}

const AgreeText = ({ type, text, arrow }: ATProps) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleOnClickCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <styles.ContainBox>
      <styles.CheckBox onClick={handleOnClickCheck}>
        {isCheck ? (
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
      <styles.TypeBox type={type}>
        {type === 'compulsory' ? '(필수)' : type === 'select' ? '(선택)' : ''}
      </styles.TypeBox>
      <styles.TextBox>{text}</styles.TextBox>
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
    </styles.ContainBox>
  );
};

export default AgreeText;
