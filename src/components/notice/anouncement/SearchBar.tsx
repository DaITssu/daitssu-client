import React, { KeyboardEvent } from 'react';
import * as styles from './SearchBar.style';
import searchicon from '@icons/icon/Search/GraySearch.svg';

const SearchBar = () => {
  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('you press enter key');
      // TODO: 엔터 키가 눌렸을 때 검색 동작 구현
    }
  };

  return (
    <styles.SearchBarStyles>
      <styles.Input
        type="text"
        placeholder="검색어를 입력하세요"
        onKeyDown={handleOnKeyPress}
      />
      <styles.GlassImage src={searchicon} width={20} height={20} alt={''} />
    </styles.SearchBarStyles>
  );
};

export default SearchBar;
