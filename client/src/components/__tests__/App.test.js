import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Neighborhood from '../Neighborhood';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders correctly', () => {
  expect(wrapped).toMatchSnapshot();
});

it('shows a neighborhood', () => {
  expect(wrapped.find(Neighborhood).length).toEqual(1);
});
