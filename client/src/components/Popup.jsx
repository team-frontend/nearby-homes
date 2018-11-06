import React from 'react';
import PopupMain from './PopupMain';
import PopupSide from './PopupSide';

const Popup = ({ home, toggleContent, homeValue, sqft, backgroundImg }) => {
  return (
    <div id="lightbox" className="lightbox is-enabled lightbox--media-details">
      <div id="lightbox-inner" className="lightbox-inner">
        <div className="lightbox-close" onClick={toggleContent}>
          Close
          <i className="fa fa-times" />
        </div>
        <div className="media-lightbox">
          <div className="media-details">
            <div className="media-details_container">
              <div className="media-container js-media-container">
                <div className="media-details-grid">
                  <PopupMain backgroundImg={backgroundImg} />

                  <PopupSide home={home} homeValue={homeValue} sqft={sqft} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
