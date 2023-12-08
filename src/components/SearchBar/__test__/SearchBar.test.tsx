import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import * as SearchContext from '../../SearchContext';

jest.mock('../../SearchContext', () => ({
  ...jest.requireActual('../../SearchContext'),
  useSearch: jest.fn(),
}));

describe('SearchBar', () => {
  it('`<SearchBar />` Should render component', () => {
    const mockRequestSearch = jest.fn();
    (SearchContext.useSearch as jest.Mock).mockReturnValue({
      requestSearch: mockRequestSearch,
    });

    const { container } = render(<SearchBar />);

    expect(container).toMatchSnapshot();
  });

  it('calls requestSearch with the entered query on button click', () => {
    const mockRequestSearch = jest.fn();
    (SearchContext.useSearch as jest.Mock).mockReturnValue({
      requestSearch: mockRequestSearch,
    });

    render(<SearchBar />);

    const inputElement = screen.getByTestId('search-input');
    const buttonElement = screen.getByTestId('search-button');

    fireEvent.change(inputElement, { target: { value: 'test query' } });
    fireEvent.click(buttonElement);

    expect(mockRequestSearch).toHaveBeenCalledWith('test query');
  });
});
