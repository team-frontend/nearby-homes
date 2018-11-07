import React from 'react';
import { mount } from 'enzyme';
import Neighborhood from '../Neighborhood';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Neighborhood />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a h2 and a h4 element', () => {
  expect(wrapped.find('h2').length).toEqual(1);
  expect(wrapped.find('h4').length).toEqual(1);
});

// describe('<Login /> component', () => {
