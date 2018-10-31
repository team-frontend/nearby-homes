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
    const { homes } = this.props;
    // for testing
    if (!this.state.expanded) {
      // <h2 onClick={this.handleCollapseTitleClick}>Neighborhood</h2>
    } else {
      return (
        <>
        {/* zipcode is hard coded for now */}
          <h2>Neighborhood: 20854</h2>
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
        </>
      );
    }
  }
}

export default Neighborhood;
