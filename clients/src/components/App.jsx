import React, { Component } from 'react';
import axios from 'axios';
import CollapsibleTitle from './CollapsibleTitle';
import Neighborhood from './Neighborhood';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
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
    const { expanded, list, zipCode } = this.state;
    // currently expanded is set to true until CSS parts are complete
    if (expanded) {
      return <Neighborhood homes={list} zipCode={zipCode} />;
    }
    return <CollapsibleTitle />;
  }
}

export default App;
