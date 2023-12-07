import React, { ChangeEvent, useState } from 'react';

import { Wrapper, SearchInput, SearchButton } from './SearchBarStyled';
import { useSearch } from '../SearchContext';

/**
 *
 * @constructor
 */
const SearchBar = () => {
  const { requestSearch } = useSearch();
  const [ searchQuery, setSearchQuery ] = useState('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = () => {
    requestSearch(searchQuery);
  }

  return (
    <Wrapper>
      <SearchInput type={'text'} onChange={onInputChange} placeholder={`Enter search query`}/>
      <SearchButton onClick={handleSearch} >{'Search'}</SearchButton>
    </Wrapper>
  );
}

export default SearchBar;
