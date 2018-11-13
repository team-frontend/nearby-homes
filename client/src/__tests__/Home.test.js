import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../Home';

const wrapper = shallow(<Home />);
let container;

describe('render <h4>', () => {
  beforeEach(() => {
    container = wrapper.find('h4');
  });

  it('should have a <h4>', () => {
    expect(container).toHaveLength(1);
  });

  it('should have a <h4> with the properly text', () => {
    expect(container.text()).toEqual('NEARBY HOMES');
  });
});

