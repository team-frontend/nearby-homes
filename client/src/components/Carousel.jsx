import React from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Home from './Home';

const Carousel = ({
  homes,
  currIndex,
  showPopup,
  goToNextSlide,
  goToPrevSlide,
  toggleContent,
}) => {
  return (
    <>
      <h4 className="nearby-homes">NEARBY HOMES</h4>
      <div className="nearby-homes-container">
        <div className="nearby-homes-carousel">
          <LeftArrow currIndex={currIndex} goToPrevSlide={goToPrevSlide} />
          <div className="nearby-homes-list">
            {homes.map((home, i) => {
              if (i === currIndex || i === currIndex + 1) {
                return (
                  <Home
                    home={home}
                    key={home.id}
                    showPopup={showPopup}
                    toggleContent={toggleContent}
                  />
                );
              }
            })}
          </div>
          <RightArrow
            currIndex={currIndex}
            goToNextSlide={goToNextSlide}
            listLength={homes.length}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
