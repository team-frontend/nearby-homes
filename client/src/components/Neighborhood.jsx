import React, { Component } from 'react';
import Details from './Details';

class Neighborhood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleCollapseTitleClick() {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { homes, zipCode } = this.props;
    const { expanded } = this.state;
    // for testing,
    if (!expanded) {
      // <h2 onClick={this.handleCollapseTitleClick}>Neighborhood</h2>
    } else {
      return (
        <>
          <h2>
            Neighborhood:
            {zipCode}
          </h2>
          <div className="container">
            <div className="zsg-layout">
              <h4>NEARBY HOMES</h4>
              <div className="zsg-content-component">
                <div className="photo-card-carousel">
                  <div className="slick-initialized slick-slider photo-card-carousel">
                    <div className="slick-arrow slick-prev slick-disabled zsg-carousel-btn zsg-icon-expando-left" />
                  </div>
                  <div className="slick-list">
                    {homes.map(home => (
                      <Details home={home} key={home.id} />
                    ))}
                  </div>
                  <div className="slick-arrow slick-next zsg-carousel-btn zsg-icon-expando-right" />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Neighborhood;
