import React, { Component } from 'react';
import axios from 'axios';
import Neighborhood from './Neighborhood';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      zipCode: '',
    };
  }

  componentDidMount() {
    axios.get('/nearbyHomes').then((homes) => {
      this.setState({
        list: homes.data,
        zipCode: homes.data[0].zipCode,
      });
    });
  }

  render() {
    const { list, zipCode } = this.state;
    const isOddLength = list.length % 2 === 1;
    console.log('isOdd', isOddLength)
    return <Neighborhood homes={list} zipCode={zipCode} lastCell={isOddLength}/>;
  }
}

export default App;
