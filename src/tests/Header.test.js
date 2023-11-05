import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('Header', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
