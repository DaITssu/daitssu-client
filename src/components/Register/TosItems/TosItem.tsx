import * as styles from './TosItem.style';
import Image from 'next/image';
interface TosItemProps {
  isChecked: boolean;
  onCheckboxClick: () => void;
  text: string;
  isEssential?: boolean;
  onArrowClick: () => void;
  checkedRadio: string;
  defaultRadio: string;
  rightArrow: string;
}

const TosItem: React.FC<TosItemProps> = ({
  isChecked,
  onCheckboxClick,
  text,
  isEssential = true,
  onArrowClick,
  checkedRadio,
  defaultRadio,
  rightArrow,
}) => {
  return (
    <styles.TosItemStyle>
      <styles.TosItemImageDiv onClick={onCheckboxClick}>
        {isChecked ? (
          <Image src={checkedRadio} alt="CheckedRadio" />
        ) : (
          <Image src={defaultRadio} alt="DefaultRadio" />
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
        src={rightArrow}
        alt="RightArrow"
        style={{ position: 'absolute', right: '16px' }}
      ></Image>
    </styles.TosItemStyle>
  );
};

export default TosItem;
