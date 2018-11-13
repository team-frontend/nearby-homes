import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CollapsibleTitle from '../CollapsibleTitle';

const wrapper = mount(<CollapsibleTitle />);
let container;

describe('render <h2>', () => {
  beforeEach(() => {
    container = wrapper.find('h2');
  });

  it('should have a <h2>', () => {
    expect(container).toHaveLength(1);
  });

  it('should have a <h4> with the properly text', () => {
    expect(container.text()).toEqual('Neighborhood:');
  });
});

it('should have collapsible title class', () => {
  expect(wrapper.find('.collapsible-title-container')).toBeDefined();
});

it('should expand title on click', () => {
  const titleBtn = wrapper.find('.collapsible-title-collapsible');
  expect(wrapper.find(titleBtn)).toHaveLength(1);
  titleBtn.simulate('click');
  expect(titleBtn).toHaveLength(0);
});
