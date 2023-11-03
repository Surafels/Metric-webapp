import React from 'react';
import { renderer } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Companies from '../components/Companies';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Companies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    useSelector.mockReturnValueOnce({ companies: [], error: null, isLoading: false });
    const tree = renderer
      .create(
        <BrowserRouter>
          <Companies />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loading message when isLoading is true', () => {
    useSelector.mockReturnValueOnce({ companies: [], error: null, isLoading: true });
    const tree = renderer
      .create(
        <BrowserRouter>
          <Companies />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render error message when there is an error', () => {
    useSelector.mockReturnValueOnce({ companies: [], error: 'Some error message', isLoading: false });
    const tree = renderer
      .create(
        <BrowserRouter>
          <Companies />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render filtered companies', () => {
    const mockCompanies = [
      { symbol: 'AAPL', name: 'Apple Inc.', currency: 'USD' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', currency: 'USD' },
    ];
    useSelector.mockReturnValueOnce({ companies: mockCompanies, error: null, isLoading: false });
    const tree = renderer
      .create(
        <BrowserRouter>
          <Companies />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
