import React, { KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 358px;
  height: 45px;
  border-radius: 25px;
  padding: 0 10px;
  border: 1px solid #6e6e6e;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

const GlassImage = styled(Image)`
  margin-right: 10px;
`;

const SearchBar = () => {
  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('you press enter key');
      // TODO: 엔터 키가 눌렸을 때 검색 동작 구현
    }
  };

  return (
    <SearchBarStyles>
      <Input
        type="text"
        placeholder="검색어를 입력하세요"
        onKeyDown={handleOnKeyPress}
      />
      <GlassImage src="/glass.png" width={20} height={20} alt={''} />
    </SearchBarStyles>
  );
};

export default SearchBar;
