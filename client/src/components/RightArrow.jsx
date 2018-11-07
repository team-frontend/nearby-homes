import React from 'react';

const RightArrow = ({ currIndex, goToNextSlide, listLength, isOddLen }) => {
  const lastI = isOddLen
    ? currIndex === listLength - 2
    : currIndex === listLength - 1;
  return lastI ? (
    <div className="carousel-right-arrow-disabled" />
  ) : (
    <div className="carousel-right-arrow" onClick={goToNextSlide} />
  );
};

export default RightArrow;
