import React from 'react';

const LeftArrow = ({ currIndex, goToPrevSlide }) => {
  return currIndex === 0 ? (
    <div className="carousel-left-arrow-disabled" />
  ) : (
    <div className="carousel-left-arrow" onClick={goToPrevSlide} />
  );
};

export default LeftArrow;
