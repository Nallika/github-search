import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsList from '../ResultsList';
import * as SearchContext from '../../SearchContext';
import {useInView} from "react-intersection-observer";

jest.mock('../../SearchContext', () => ({
  ...jest.requireActual('../../SearchContext'),
  useSearch: jest.fn(),
}));

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

describe('ResultsList', () => {
  const searchMock = {
    results: [],
    count: 0,
    loading: true,
    isEmpty: false,
    requestMore: jest.fn(),
  }

  it('`<ResultsList />` Should render component', () => {
    (SearchContext.useSearch as jest.Mock).mockReturnValue(searchMock);

    (useInView as jest.Mock).mockReturnValue([jest.fn(), false]);

    const { container } = render(<ResultsList />);

    expect(container).toMatchSnapshot();
  });

  it('renders loading spinner when loading and no results', () => {
    (SearchContext.useSearch as jest.Mock).mockReturnValue(searchMock);

    (useInView as jest.Mock).mockReturnValue([jest.fn(), false]);

    render(<ResultsList />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders results and "Found X repositories" text when results exist', () => {
    const mockResults = [
      { node: { id: '1', name: 'Repo1', stargazerCount: 10 } },
      { node: { id: '2', name: 'Repo2', stargazerCount: 20 } },
    ];

    (SearchContext.useSearch as jest.Mock).mockReturnValue({
      ...searchMock,
      results: mockResults,
      count: mockResults.length,
    });

    (useInView as jest.Mock).mockReturnValue([jest.fn(), false]);

    render(<ResultsList />);

    expect(screen.getByText('Found 2 repositories')).toBeInTheDocument();

    mockResults.forEach((result) => {
      expect(screen.getByText(result.node.name)).toBeInTheDocument();
      expect(screen.getByText(`Stars: ${result.node.stargazerCount}`)).toBeInTheDocument();
    });

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  it('calls requestMore when in view', async () => {
    const mockResults = [
      { node: { id: '1', name: 'Repo1', stargazerCount: 10 } },
      { node: { id: '2', name: 'Repo2', stargazerCount: 20 } },
    ];
    const mockRequestMore = jest.fn();

    (SearchContext.useSearch as jest.Mock).mockReturnValue({
      results: mockResults,
      count: mockResults.length,
      loading: false,
      isEmpty: false,
      requestMore: mockRequestMore,
    });

    (useInView as jest.Mock).mockReturnValue([jest.fn(), true]);

    render(<ResultsList />);

    expect(mockRequestMore).toHaveBeenCalled();
  });

  it('renders "Nothing found" text when results are empty', () => {
    (SearchContext.useSearch as jest.Mock).mockReturnValue({
      ...searchMock,
      isEmpty: true
    });

    (useInView as jest.Mock).mockReturnValue([jest.fn(), false]);

    render(<ResultsList />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});
