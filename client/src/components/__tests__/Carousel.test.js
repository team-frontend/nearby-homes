import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import Popup from '../Popup';

it('should render the Popup component if state.showPopup is true', () => {
  const carouselComponent = shallow(<Carousel />);
  carouselComponent.setState({ showPopup: true });
  expect(carouselComponent.find(Popup).length).toBe(1);
});
