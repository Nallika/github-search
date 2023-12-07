import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('`<SearchBar />` Should render component', () => {
  const { container } = render(<SearchBar />);

  expect(container).toMatchSnapshot();
});
