import React, { KeyboardEvent, useState } from 'react';
import * as styles from './LineSearchBar.styles';
import searchicon from '@icons/icon/Search/BlueSearch.svg';
import cancelicon from '@icons/icon/SubscribeList/Cancel.svg';

const LineSearchBar = ({
  onSearch,
}: {
  onSearch: (searchText: string) => void;
}) => {
  const [searchText, setSearchText] = useState('');

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
  };
  const handleSearch = () => {
    onSearch(searchText);
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
          <styles.CancelImage
            src={cancelicon}
            width={18}
            height={18}
            alt={''}
          />
        </styles.Circle>

        <styles.GlassImage
          src={searchicon}
          width={24}
          height={24}
          alt={''}
          onClick={handleSearch}
        />
      </styles.SearchBarStyles>
    </styles.SearchBarBox>
  );
};

export default LineSearchBar;
