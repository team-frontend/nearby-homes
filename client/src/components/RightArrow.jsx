import React from 'react';

const RightArrow = ({ currIndex, goToNextSlide, listLength }) => {
  return currIndex === listLength - 1 ? (
    <div className="carousel-right-arrow-disabled" />
  ) : (
    <div className="carousel-right-arrow" onClick={goToNextSlide} />
  );
};

export default RightArrow;
