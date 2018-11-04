import React, { Component } from 'react';
import Popup from './Popup';
import FavoriteButton from './FavoriteButton';
import CarouselLastColumn from './CarouselLastColumn';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.toggleContentClick = this.toggleContentClick.bind(this);
  }

  getPostedDateFromNow() {
    const { dateOfPosting } = this.props.home;
    const currTime = Date.now();
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const dateArr = dateOfPosting.split(/[-: ]/);
    const dateFormat = new Date(
      dateArr[0],
      dateArr[1] - 1,
      dateArr[2],
      dateArr[3],
      dateArr[4],
      dateArr[5]
    );
    return Math.floor((currTime - dateFormat) / MS_PER_DAY);
  }

  handleTimePosted() {
    // if u change any variable, you should put in function and setState 
    const { status } = this.props.home;
    if (status === 'OFF MARKET') {
      return <li className="photo-count">1 photo</li>;
    }
    return (
      <div className="posted-date">
        {this.getPostedDateFromNow()} days on Zillow
      </div>
    );
  }

  toggleContentClick() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup
    }));
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
        return <span className="icon-sold-market" />;
      default:
        return null;
    }
  }

  render() {
    const {
      id,
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
    // console.log(this.props)
    const { lastCell } = this.props; 
    const { showPopup } = this.state;
    // console.log(lastCell)
    // should I condense it into one return statement ?
    if (lastCell) {
      return <CarouselLastColumn />
    }
    if (showPopup) {
      return (
        <Popup
          toggleContentClick={this.toggleContentClick.bind(this)}
          home={this.props.home}
          handleTimePosted={this.handleTimePosted.bind(this)}
        />
      );
    }
    return (
      <div className="favorite-button-asdf">
        <FavoriteButton id={id} />
        <div
          className="content-box-container"
          onClick={this.toggleContentClick}
        >
          <div className="photo-card-top">
            <ul className="zsg-list_inline zsg-photo-card-badge">
              {this.handleTimePosted()}
            </ul>
          </div>
        </div>

        <div className="zsg-photo-card-content zsg-aspect-ratio-content">
          <div className="zsg-photo-card-caption">
            <h4 className="zsg-photo-card-spec">
              {this.renderSwitch(status)}
              <span>{status}</span>
            </h4>
            <p className="zsg-photo-card-spec">
              <span className="zsg-photo-card-price">${homeValue} </span>
              <span className="zsg-photo-card-info">
                <span>
                  <span className="property-beds">{numberOfBedroom} bds</span>
                  <span className="property-baths">{numberOfBathroom} ba</span>
                  <span className="property-area">{sqft} sqft</span>
                </span>
              </span>
            </p>
            <p className="zsg-photo-card-spec-address">
              <span className="zsg-photo-card-address">
                {streetName}, {cityName}, {stateName}, {zipCode}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
