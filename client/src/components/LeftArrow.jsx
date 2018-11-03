import React from 'react';

const LeftArrow = ({ currIndex, goToPrevSlide }) => {
  if (currIndex === 0) {
    return (
      <div className="slick-arrow slick-prev slick-disabled zsg-carousel-btn zsg-icon-expando-left-disabled" />
    );
  }
  return (
    <div
      className="slick-arrow slick-prev slick-disabled zsg-carousel-btn zsg-icon-expando-left"
      onClick={goToPrevSlide}
    />
  );
};

export default LeftArrow;
