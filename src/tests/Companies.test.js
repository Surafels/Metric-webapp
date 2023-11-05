import React from 'react';
import { create } from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Companies from '../components/Companies';

jest.mock('react-redux');

describe('Companies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    useSelector.mockReturnValue({ companies: [], error: null, isLoading: false });
    useDispatch.mockReturnValue(jest.fn());
    const tree = create(
      <BrowserRouter>
        <Companies />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loading message when isLoading is true', () => {
    useSelector.mockReturnValue({ companies: [], error: null, isLoading: true });
    useDispatch.mockReturnValue(jest.fn());
    const tree = create(
      <BrowserRouter>
        <Companies />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render error message when there is an error', () => {
    useSelector.mockReturnValue({ companies: [], error: 'Some error message', isLoading: false });
    useDispatch.mockReturnValue(jest.fn());
    const tree = create(
      <BrowserRouter>
        <Companies />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render filtered companies', () => {
    const mockCompanies = [
      { symbol: 'AAPL', name: 'Apple Inc.', currency: 'USD' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', currency: 'USD' },
    ];
    useSelector.mockReturnValue({ companies: mockCompanies, error: null, isLoading: false });
    useDispatch.mockReturnValue(jest.fn());
    const tree = create(
      <BrowserRouter>
        <Companies />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
