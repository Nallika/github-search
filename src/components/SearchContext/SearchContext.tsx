import React, {createContext, useCallback, useContext, useState} from 'react';
import { useLazyQuery } from '@apollo/client';

import { SearchContextValues, SearchProviderProps } from '../../types';
import { GET_REPOS } from './query';
import { DEFAULT_OFFSET } from '../../constants';

const SearchContext = createContext<SearchContextValues>({
  results: [],
  count: 0,
  loading: false,
  requestSearch: () => {}
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [getData, { loading, data }] = useLazyQuery(GET_REPOS);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ searchResults, setSearchResult ] = useState([]);
  const [ resultsCount, setResultsCount ] = useState(0);

  const requestSearch = useCallback(async (query: any) => {
    if (loading) {
      return;
    }

    const isNewSearch = query !== searchQuery;

    try {
      const offset = isNewSearch ? null : data.search.pageInfo.endCursor;

      const { data: { search: {edges: results, repositoryCount}} } = await getData({
        variables: {
          query,
          first: DEFAULT_OFFSET,
          after: offset
        }
      });

      setResultsCount(repositoryCount);
      setSearchQuery(query);
      setSearchResult(results);

    } catch (error) {
      console.error(error);
    }
  }, [data, getData, loading, searchQuery]);

  return (
    <SearchContext.Provider value={{
      results: searchResults,
      count: resultsCount,
      loading,
      requestSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
