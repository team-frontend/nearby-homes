import React from 'react';

const PopupMain = ({ backgroundImg }) => {
  console.log('inside pop', backgroundImg)
  return (
  <div className="media-details-grid_main">
    <div className="media js-media-photo" data-photo-id="1">
      <img className="photo-box-img" src={backgroundImg} />
    </div>
  </div>
);
  }

export default PopupMain;
