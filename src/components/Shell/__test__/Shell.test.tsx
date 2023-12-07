import React, {ReactNode} from 'react';
import { render } from '@testing-library/react';
import Shell from '../Shell';

jest.mock('../../SearchContext', () => ({
  SearchProvider: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
jest.mock('../../ResultsList', () => () => <div>ResultsList</div>);
jest.mock('../../SearchBar', () => () => <div>SearchBar</div>);

test('`<Shell />` Should render component', () => {
  const { container } = render(<Shell />);

  expect(container).toMatchSnapshot();
});
