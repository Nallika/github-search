import React from 'react';

import { useSearch } from '../SearchContext';
import { SearchItem } from '../../types';
import ResultItem from '../ResultItem';
import { Wrapper, Loader, CountText } from './ResultsListStyled';

/**
 *
 * @constructor
 */
const ResultsList = () => {
  const { results, count, loading } = useSearch();
  const showList = !loading && results?.length;

  return (
    <Wrapper>
      {loading && <Loader />}
      {showList ?
        <>
          <CountText>{`Found ${count} repositories`}</CountText>
          {results.map((item: SearchItem) => (
            <ResultItem {...item.node} />
          ))}
        </> : null
      }
    </Wrapper>
  );
}

export default ResultsList;
