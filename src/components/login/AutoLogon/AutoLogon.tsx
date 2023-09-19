import Image from 'next/image';

import * as styles from './AutoLogon.styles';
import GrayCheckedBoxIcon from '@icons/icon/CheckBox/GrayCheckedBox.svg';
import BlueCheckedBoxIcon from '@icons/icon/CheckBox/BlueCheckedBox.svg';

interface AutoLogonProps {
  isSelected: boolean;
  handleClickAutoLogon: () => void;
}
export default function AutoLogon({
  isSelected,
  handleClickAutoLogon,
}: AutoLogonProps) {
  return (
    <styles.AutoLogonContainer>
      <styles.CheckBtn onClick={handleClickAutoLogon}>
        {isSelected ? (
          <Image src={BlueCheckedBoxIcon} alt="자동로그인 체크박스" />
        ) : (
          <Image src={GrayCheckedBoxIcon} alt="자동로그인 체크박스" />
        )}
      </styles.CheckBtn>
      <styles.Text>자동로그인</styles.Text>
    </styles.AutoLogonContainer>
  );
}
