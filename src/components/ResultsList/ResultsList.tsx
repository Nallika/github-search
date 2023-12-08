import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSearch } from '../SearchContext';
import { SearchItem } from '../../types';
import ResultItem from '../ResultItem';
import { Wrapper, LoaderContainer, BottomLoaderContainer, Loader, Text } from './ResultsListStyled';

/**
 * Display list of search results, request more results on scroll
 * @constructor
 */
const ResultsList = () => {
  const { results, count, loading, isEmpty, requestMore } = useSearch();
  // Using intersection-observer for infinity scroll not perfect approach
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      requestMore();
    }
  }, [inView, requestMore]);

  return (
    <Wrapper>
      {(loading && !results.length) &&
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      }
      {results.length ?
        <>
          <Text>{`Found ${count} repositories`}</Text>
          {results.map((item: SearchItem) => (
            <ResultItem key={item.node.id} {...item.node} />
          ))}
          <BottomLoaderContainer ref={ref}>
            <Loader />
          </BottomLoaderContainer>
        </> : null
      }
      {isEmpty && <Text>{'Nothing found'}</Text>}
    </Wrapper>
  );
}

export default ResultsList;
