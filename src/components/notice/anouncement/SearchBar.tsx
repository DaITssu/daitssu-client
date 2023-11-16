
import React, { KeyboardEvent, useState } from 'react';
import * as styles from './SearchBar.styles';
import searchicon from '@icons/icon/Search/GraySearch.svg';

const SearchBar = ({onSearch}:{onSearch : (searchText:string)=>void}) => {

  const [searchText, setSearchText] = useState('');

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleSearch = () =>{
    onSearch(searchText);
  };

  return (
    <styles.SearchBarStyles>
      <styles.Input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchText}
        onKeyDown={handleOnKeyPress}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <styles.GlassImage
        src={searchicon}
        width={20}
        height={20}
        alt={'search'}
        onClick={handleSearch}
      />
    </styles.SearchBarStyles>
  );
};

export default SearchBar;
