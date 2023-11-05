import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CompanyNotFound from '../components/CompanyNotfound';

describe('CompanyNotFound', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CompanyNotFound />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
