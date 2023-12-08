import React, {createContext, useCallback, useContext, useState} from 'react';
import { useLazyQuery } from '@apollo/client';

import {SearchContextValues, SearchItem, SearchProviderProps} from '../../types';
import { GET_REPOS } from './query';
import { LIMIT } from '../../constants';

const SearchContext = createContext<SearchContextValues>({
  results: [],
  count: 0,
  loading: false,
  isEmpty: false,
  requestSearch: () => {},
  requestMore: () => {}
});

/**
 * Here we format and store search results, and provide callbacks to request new search and more results
 * @param children
 * @constructor
 */
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [getData, { loading, data }] = useLazyQuery(GET_REPOS);

  const [ searchQuery, setSearchQuery ] = useState('');
  const [ searchResults, setSearchResult ] = useState<SearchItem[]>([]);
  const [ resultsCount, setResultsCount ] = useState(0);
  const [ isEmpty, setIsEmpty ] = useState(false);

  /**
   * Request search by provided query
   * @param query - search query
   * @param more - flag that point on request more results from same search query
   */
  const requestSearch = useCallback(async (query: string, more?: boolean) => {
    if (loading) {
      return;
    }

    try {
      // Set pointer for requesting additional results
      const cursor = more ? data.search.pageInfo.endCursor : null;
      const { data: { search: {edges: results, repositoryCount}} } = await getData({
        variables: {
          query: query,
          first: LIMIT,
          after: cursor
        }
      });

      // Set direct empty search flag to use in @ResultsList
      repositoryCount === 0 ? setIsEmpty(true) : setIsEmpty(false);
      setResultsCount(repositoryCount);
      setSearchQuery(query);
      // Extend state if requesting more, or rewrite on new search
      setSearchResult((prevState) => {
        if (more) {
          return [
            ...prevState,
            ...results,
          ]
        }

        return results;
      });

    } catch (error) {
      // Improvised error logger :)
      console.error(error);
    }
  }, [data, getData, loading]);

  /**
   * Request more result from same search
   */
  const requestMore = useCallback(() => {
    requestSearch(searchQuery, true);
  }, [requestSearch, searchQuery])

  return (
    <SearchContext.Provider value={{
      results: searchResults,
      count: resultsCount,
      loading,
      isEmpty,
      requestSearch,
      requestMore
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
