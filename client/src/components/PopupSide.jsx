import React from 'react';

const PopupSide = ({ home, homeValue, sqft }) => {
  return (
    <div className="media-details-grid_side">
      <div className="media-details-grid_side-inner">
        <div className="media-info">
          <div className="media-info_item media-info_house">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            obcaecati nesciunt commodi quod vitae dolore non, reiciendis, natus
            amet nulla corporis laborum nobis iure numquam, quaerat magnam cum
            earum aut!
            <div className="media-block" />
          </div>
          <div className="media-info_container">
            <div className="media-info_item media-info_caption" />

            <div className="home-photo-card-content home-aspect-ratio-content">
              <div className="home-photo-card-caption">
                <h4 className="home-photo-card-spec">
                  <span>{home.status}</span>
                </h4>
                <span className="home-photo-card-price">${homeValue} </span>
                <p className="home-photo-card-spec">
                  <span className="home-photo-card-info">
                    <span>
                      <span className="property-beds">
                        {home.numberOfBedroom} bds
                      </span>
                      <span className="property-baths">
                        {home.numberOfBathroom} ba
                      </span>
                      <span className="property-area">{sqft} sqft</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="media-info-date">
              {home.dateOfPosting.slice(0, -9)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSide;
