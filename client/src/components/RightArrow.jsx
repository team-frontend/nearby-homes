import React from 'react';

const RightArrow = ({ currIndex, goToNextSlide, listLength }) => {
  if (currIndex === listLength - 1) {
    return (
      <div className="slick-arrow slick-next zsg-carousel-btn zsg-icon-expando-right-disabled" />
    );
  }
  return (
    <div
      className="slick-arrow slick-next zsg-carousel-btn zsg-icon-expando-right"
      onClick={goToNextSlide}
    />
  );
};

export default RightArrow;
