import * as styles from './Header.style';
import SearchIcon from '@icons/icon/header/search.svg';
import AlarmIcon from '@icons/icon/header/alarm.svg';
import Image from 'next/image';
const Header = () => {
  return (
    <>
      <styles.Conatiner>
        <styles.LogoText>DAITSSU</styles.LogoText>
        <styles.IconContainer>
          <Image src={SearchIcon} height={24} width={24} alt="search" />
          <Image src={AlarmIcon} height={24} width={24} alt="alarm" />
        </styles.IconContainer>
      </styles.Conatiner>
    </>
  );
};
export default Header;
