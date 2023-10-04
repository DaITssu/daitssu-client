import React, { KeyboardEvent, useState } from 'react';
import * as styles from './LineSearchBar.style';
import searchicon from '@icons/icon/Search/BlueSearch.svg';
import cancelicon from '@icons/icon/SubscribeList/Cancel.svg';

const LineSearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('you press enter key');
      // TODO: 엔터 키가 눌렸을 때 검색 동작 구현
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <styles.SearchBarBox>
      <styles.SearchBarStyles>
        <styles.Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchText}
          onKeyDown={handleOnKeyPress}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <styles.Circle onClick={handleClearSearch}>
          <styles.CancelImage src={cancelicon} width={18} height={18} alt={''} />
        </styles.Circle>
        
        <styles.GlassImage src={searchicon} width={24} height={24} alt={''} />
      </styles.SearchBarStyles>
    </styles.SearchBarBox>
    
  );
};

export default LineSearchBar;
