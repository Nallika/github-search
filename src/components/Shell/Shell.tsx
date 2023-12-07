import React from 'react';

import { SearchProvider } from '../SearchContext';
import ResultsList from '../ResultsList';
import SearchBar from '../SearchBar';
import { Wrapper } from './ShellStyled';

/**
 *
 * @constructor
 */
const Shell = () => {
  return (
    <SearchProvider>
      <Wrapper>
        <SearchBar />
        <ResultsList />
      </Wrapper>
    </SearchProvider>
  );
}

export default Shell;
