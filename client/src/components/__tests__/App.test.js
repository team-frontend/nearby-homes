import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import Neighborhood from '../Neighborhood';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

describe('App component', () => {
  it('shows a neighborhood', () => {
    expect(wrapped.find(Neighborhood).length).toEqual(1);
  });

  it('renders correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('mount correctly', () => {
      expect(mount(<App />)).toMatchSnapshot() 
  })
  it('renders correctly', () => {
    expect(render(<App />)).toMatchSnapshot();
  });
});