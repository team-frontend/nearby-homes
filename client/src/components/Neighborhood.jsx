import React, { Component } from 'react';
import Details from './Details';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Neighborhood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
      currIndex: 0,
    };

    this.handleCollapsibleTitleClick = this.handleCollapsibleTitleClick.bind(
      this
    );
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }

  handleCollapsibleTitleClick(e) {
    // e.preventDefault();
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }

  toggleCollapse() {
    const { expanded } = this.state;
    if (expanded) {
      return <div className="h2-hdp-collapsible-title-collapsible" />;
    }
    return <div className="h2-hdp-collapsible-title-collapsed" />;
  }

  goToNextSlide() {
    this.setState((prevState) => ({
      currIndex: prevState.currIndex + 1,
    }));
  }

  goToPrevSlide() {
    this.setState((prevState) => ({
      currIndex: prevState.currIndex - 1,
    }));
  }

  render() {
    const { homes, zipCode } = this.props;
    const { expanded, currIndex } = this.state;

    return (
      <div className="title-container">
        <div className="zsg-layout">
          <h2
            className="h2-hdp-collapsible-title collapsible"
            onClick={this.handleCollapsibleTitleClick}
          >
            Neighborhood:
            {zipCode}
            {this.toggleCollapse()}
          </h2>
          <div
            className="collapsible-content"
            style={!expanded ? { display: 'none' } : { display: 'block' }}
          >
            <h4 className="nearby-homes">NEARBY HOMES</h4>
            <div className="zsg-content-component">
              <div className="photo-card-carousel">
                <div className="slick-initialized slick-slider">
                  <LeftArrow
                    currIndex={currIndex}
                    goToPrevSlide={this.goToPrevSlide}
                  />
                  <div className="slick-list">
                    {homes.map((home, i) => {
                      if (i === currIndex || i === currIndex + 1) {
                        return <Details home={home} key={home.id} />;
                      }
                    })}
                  </div>
                  <RightArrow
                    currIndex={currIndex}
                    goToNextSlide={this.goToNextSlide}
                    listLength={homes.length}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Neighborhood;
