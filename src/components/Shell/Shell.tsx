import React from 'react';

import { SearchProvider } from '../SearchContext';
import ResultsList from '../ResultsList';
import SearchBar from '../SearchBar';
import { Wrapper, Header } from './ShellStyled';

/**
 * Core container, display search components
 * @constructor
 */
const Shell = () => {
  return (
    <SearchProvider>
      <Wrapper>
        <Header>{'Github search'}</Header>
        <SearchBar />
        <ResultsList />
      </Wrapper>
    </SearchProvider>
  );
}

export default Shell;
