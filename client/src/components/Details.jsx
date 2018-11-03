import React, { Component } from 'react';
import Carousel from './Carousel';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      dateOfPosting: '',
      status: '',
      numberOfLikes: '',
      numberOfBathroom: '',
      numberOfBedroom: '',
      homeValue: '',
      sqft: '',
      streetName: '',
      cityName: '',
      stateName: '',
      zipCode: '',
    };
  }

  componentDidMount() {
    const { home } = this.props;
    this.setState({
      id: home.id,
      dateOfPosting: home.dateOfPosting,
      status: home.status,
      numberOfLikes: home.numberOfLikes,
      numberOfBathroom: home.numberOfBathroom,
      numberOfBedroom: home.numberOfBedroom,
      homeValue: this.numberWithCommas(home.homeValue),
      sqft: this.numberWithCommas(home.sqft),
      streetName: home.streetName,
      cityName: home.cityName,
      stateName: home.stateName,
      zipCode: home.zipCode,
    });
  }

  numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const { index } = this.props;
    return (
      <div
        className="main-container"
        style={{
          backgroundImage: `url("https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg")`,
        }}
      >
        <div className="inner-container">
          <div className="contents">
            <Carousel home={this.state} index={index} />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
