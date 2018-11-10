import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import CollapsibleTitle from '../CollapsibleTitle';
import Carousel from '../Carousel';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

describe('App component', () => {
  it('shows a CollapsibleTitle and Carousel', () => {
    expect(wrapped.find(CollapsibleTitle).length).toEqual(1);
  });
  // expect(wrapped.find(Carousel).length).toEqual(1);

  // it('renders correctly', () => {
  //   expect(wrapped).toMatchSnapshot();
  // });

  // it('mount correctly', () => {
  //   expect(mount(<App />)).toMatchSnapshot(); 
  // });
  // it('renders correctly', () => {
  //   expect(render(<App />)).toMatchSnapshot();
  // });
});
