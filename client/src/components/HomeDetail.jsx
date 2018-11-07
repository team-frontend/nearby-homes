import React from 'react';
import HomeStatus from './HomeStatus';
import HomePosted from './HomePosted';
import Popup from './Popup';
import LikeButton from './LikeButton';

const addCommas = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const HomeDetail = ({ home, showPopup, toggleContent }) => {
  const homeValue = addCommas(home.homeValue);
  const sqft = addCommas(home.sqft);
  
  return showPopup ? (
    <Popup home={home} toggleContent={toggleContent} homeValue={homeValue} sqft={sqft} />
  ) : (
    <>
      <LikeButton />
      <div className="home-content-box" onClick={toggleContent}>
        <div className="home-photo-inline-top">
          <ul className="home-posted-inline">
            <HomePosted home={home} />
          </ul>
        </div>
      </div>
      <div className="home-photo-card-content">
        <div className="home-photo-card-caption">
          <h4 className="home-photo-card-spec">
            <HomeStatus status={home.status} />
          </h4>
          <p className="home-photo-card-spec">
            <span className="home-photo-card-price">
              $
              {homeValue}
              {' '}

            </span>
            <span className="home-photo-card-spec">
              <span>
                <span className="property-beds">
                  {home.numberOfBedroom}
                  {' '}
                  bds
                </span>
                <span className="property-baths">
                  {home.numberOfBathroom}
                  {' '}
                  ba
                </span>
                <span className="property-area">
                  {sqft}
                  {' '}
                  sqft
                </span>
              </span>
            </span>
          </p>
          <p className="home-photo-card-spec-address">
            <span className="home-photo-card-address">
              {home.streetName}
              ,
              {home.cityName}
              ,
              {home.stateName}
              ,
              {home.zipCode}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeDetail;
