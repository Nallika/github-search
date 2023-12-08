import React, { ChangeEvent, useState } from 'react';

import { Wrapper, SearchInput, SearchButton } from './SearchBarStyled';
import { useSearch } from '../SearchContext';

/**
 * Display input and button for request new search by provided query
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
      <SearchInput
        data-testid={'search-input'}
        type={'text'}
        onChange={onInputChange}
        placeholder={`Enter search query`}
      />
      <SearchButton data-testid={'search-button'}  onClick={handleSearch} >{'Search'}</SearchButton>
    </Wrapper>
  );
}

export default SearchBar;
