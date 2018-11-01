import React, { Component } from 'react';
import moment from 'moment';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSwitch(status) {
    switch (status) {
      case 'FOR SALE':
        return <span className="icon for-sale-market" />;
      case 'FORECLOSURE':
        return <span className="icon foreclosure-market" />;
      case 'AUCTION':
        return <span className="icon auction-market" />;
      case 'OFF MARKET':
        return <span className="icon off-market" />;
      case 'FOR RENT':
        return <span className="icon for-rent-market" />;
      case 'SOLD':
        return <span className="icon sold-market" />;
      default:
        return null;
    }
  }

  // checkPostedOnZillow() {
  //   if ()
  // }

  render() {
    const {
      // dateOfPosting,
      status,
      numberOfLikes,
      numberOfBathroom,
      numberOfBedroom,
      homeValue,
      sqft,
      streetName,
      cityName,
      stateName,
      zipCode,
    } = this.props.home;
    return (
      <article
        className="photo-card zsg-photo-card zsg-aspect-ratio type-not-favorite"
        id="zpid_31581073"
        role="presentation"
      >
        <div className="photo-card-top">
          <ul className="zsg-list_inline zsg-photo-card-badge">
            <li className="photo-count">1 photo</li>
          </ul>
          <div className="zsg-photo-card-actions">
            <button className="favorite-button" type="button" aria-label="Favorite to save">
              {/* <span className="image-control sprite-heart-line new-save-hide-icon larger-save" /> */}
              <span className="heart" />
            </button>
          </div>
        </div>
        <div className="zsg-photo-card-content zsg-aspect-ratio-content">
          <div className="zsg-photo-card-caption">
            <h4 className="zsg-photo-card-spec">
              {this.renderSwitch(status)}
              <span>{status}</span>
            </h4>
            <p className="zsg-photo-card-spec">
              <span className="zsg-photo-card-price">
                $
                {homeValue}
                {' '}

              </span>
              <span className="zsg-photo-card-info">
                <span>
                  <span className="property-beds">
                    {numberOfBedroom}
                    {' '}
                    bds
                  </span>
                  <span className="property-baths">
                    {numberOfBathroom}
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
            <p className="zsg-photo-card-spec">
              <span className="zsg-photo-card-address">
                {streetName}
                ,
                {cityName}
                ,
                {stateName}
                ,
                {zipCode}
              </span>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Carousel;
