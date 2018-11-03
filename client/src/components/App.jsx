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
    return <Neighborhood homes={list} zipCode={zipCode} />;
  }
}

export default App;
