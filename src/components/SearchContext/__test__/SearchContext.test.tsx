import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {SearchProvider, useSearch} from '../';

test('Should pass context to child elements', async () => {
  const TestElement = () => {
    const {
      results,
      count,
      loading,
      isEmpty,
      requestSearch,
      requestMore
    } = useSearch();
    return <div>Element</div>
  }

  render(
    <MockedProvider>
      <SearchProvider>
        <TestElement />
      </SearchProvider>
    </MockedProvider>
  );
});
