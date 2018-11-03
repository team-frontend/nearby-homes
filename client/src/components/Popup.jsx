import React, { Component } from 'react';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggleContentClick, handleTimePosted } = this.props;
    const {
      id,
      dateOfPosting,
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
      <div
        id="lightbox"
        className="lightbox is-enabled lightbox--media-details"
      >
        <div id="lightbox-inner" className="lightbox-inner">
          <div className="lightbox-close" onClick={toggleContentClick}>
            Close
            <i className="fa fa-times" />
            {/* <span className="icon" /> */}
          </div>
          <div className="media-lightbox">
            <div className="media-details">
              <div className="media-details_container">
                <div className="media-container js-media-container">
                  <div className="media-details-grid">
                    <div className="media-details-grid_main">
                      <div className="media js-media-photo" data-photo-id="1">
                        <img
                          alt="Photo of Fog Harbor Fish House - San Francisco, CA, United States. Shellfish Platter"
                          className="photo-box-img"
                          src="https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
                        />
                      </div>
                    </div>
                    <div className="media-details-grid_side">
                      <div className="media-details-grid_side-inner">
                        <div className="media-info">
                          <div className="media-info_item media-info_house">
                            <div className="media-block" />
                          </div>
                          <div className="media-info_container">
                            <div className="media-info_item media-info_caption" />
                            <div className="photo-card-top">
                              <ul className="zsg-list_inline zsg-photo-card-badge">
                                {handleTimePosted()}
                              </ul>
                            </div>

                            <div className="zsg-photo-card-content zsg-aspect-ratio-content">
                              <div className="zsg-photo-card-caption">
                                <h4 className="zsg-photo-card-spec">
                                  <span>{status}</span>
                                </h4>
                                <p className="zsg-photo-card-spec">
                                  <span className="zsg-photo-card-price">
                                    ${homeValue}{' '}
                                  </span>
                                  <span className="zsg-photo-card-info">
                                    <span>
                                      <span className="property-beds">
                                        {numberOfBedroom} bds
                                      </span>
                                      <span className="property-baths">
                                        {numberOfBathroom} ba
                                      </span>
                                      <span className="property-area">
                                        {sqft} sqft
                                      </span>
                                    </span>
                                  </span>
                                </p>
                                <p className="zsg-photo-card-spec-address">
                                  <span className="zsg-photo-card-address">
                                    {streetName}, {cityName}, {stateName},{' '}
                                    {zipCode}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
