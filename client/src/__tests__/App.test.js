import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import CollapsibleTitle from '../CollapsibleTitle';
import Carousel from '../Carousel';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App component', () => {
  it('shows a CollapsibleTitle and Carousel', () => {
    expect(wrapper.find(CollapsibleTitle).length).toEqual(1);
  });

  it('without component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(mount(<App />)).toMatchSnapshot();
  });
  // it('renders correctly', () => {
  //   expect(render(<App />)).toMatchSnapshot();
  // });

  it('render correct class name', () => {
    expect(wrapper.find('.collapsible-title-container')).toBeDefined();
    expect(wrapper.hasClass('collapsible-title-container')).toEqual(true);
  });

  it('renders a Carousel on click', () => {
    expect(wrapper.find(Carousel).length).toEqual(0);
    wrapper.setState({isExpanded: true});
    expect(wrapper.find(Carousel).length).toEqual(1);
  });
});
