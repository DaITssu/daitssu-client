import * as styles from './TosItem.styles';

import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';
import RightArrow from '@icons/icon/Arrow/RightBigArrow.svg';

import Image from 'next/image';
interface TosItemProps {
  isChecked: boolean;
  onCheckboxClick: () => void;
  text: string;
  isEssential?: boolean;
  onArrowClick: () => void;
}

const TosItem: React.FC<TosItemProps> = ({
  isChecked,
  onCheckboxClick,
  text,
  isEssential = true,
  onArrowClick,
}) => {
  return (
    <styles.TosItemStyle>
      <styles.TosItemImageDiv onClick={onCheckboxClick}>
        {isChecked ? (
          <Image src={CheckedRadio} alt="CheckedRadio" />
        ) : (
          <Image src={DefaultRadio} alt="DefaultRadio" />
        )}
      </styles.TosItemImageDiv>
      <div style={{ width: '12px' }}></div>
      <styles.BoxHeaderText>
        {isEssential ? (
          <styles.EssentialText>(필수)</styles.EssentialText>
        ) : (
          <styles.OptionText>(선택)</styles.OptionText>
        )}
        {text}
      </styles.BoxHeaderText>
      <Image
        onClick={onArrowClick}
        src={RightArrow}
        alt="RightArrow"
        style={{ position: 'absolute', right: '16px' }}
      ></Image>
    </styles.TosItemStyle>
  );
};

export default TosItem;
