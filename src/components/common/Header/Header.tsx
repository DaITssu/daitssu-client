import * as styles from './Header.style';
import SearchIcon from '@icons/icon/header/search.svg';
import AlarmIcon from '@icons/icon/header/alarm.svg';
import Image from 'next/image';
import { useState } from 'react';
import LineSearchBar from '@/components/Home/NoticeFunSystemTab/LineSearchBar/LineSearchBar';
import NoticeFunSystemTab from '@/components/Home/NoticeFunSystemTab/NoticeFunSystemTab';
const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleSearchIconClick=()=>{
    setIsSearchVisible((prev)=> !prev);
  }

  return (
    <>
      <styles.Conatiner>
        <styles.LogoText>DAITSSU</styles.LogoText>
        <styles.IconContainer>
          <Image  src={SearchIcon} 
                  height={24} 
                  width={24} 
                  alt="search" 
                  onClick={handleSearchIconClick} />
          <Image src={AlarmIcon} height={24} width={24} alt="alarm" />
        </styles.IconContainer>
      </styles.Conatiner>
      {isSearchVisible && <NoticeFunSystemTab/>}
    </>
  );
};
export default Header;
