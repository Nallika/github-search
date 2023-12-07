import React from 'react';
import { render } from '@testing-library/react';
import ResultItem from '../ResultItem';

test('`<ResultItem />` Should render component', () => {
  const mockData = {
    id: 'string',
    forkCount: 100,
    name: 'string',
    stargazerCount: 100,
    url: 'string'
  }
  // @ts-ignore
  const { container } = render(<ResultItem data={mockData} />);

  expect(container).toMatchSnapshot();
});
