import React from 'react';
import { render } from '@testing-library/react';
import ResultsList from '../ResultsList';

test('`<ResultsList />` Should render component', () => {
  const { container } = render(<ResultsList />);

  expect(container).toMatchSnapshot();
});
