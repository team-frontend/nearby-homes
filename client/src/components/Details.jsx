import React, { Component } from 'react';
import Carousel from './Carousel';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      loading: true,
    };
  }

  componentDidMount() {
    const home = this.props.home;
    this.setState({
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
      loading: false,
    });
  }

  numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <h1>loading ...</h1>;
    }
    return (
      <div className="contents">
        <Carousel home={this.state} />
      </div>
    );
  }
}

export default Details;

/*
    const {
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

    // console.log(home)
    this.setState({
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
    });
*/
