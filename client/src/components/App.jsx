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
    };
  }

  componentDidMount() {
    axios.get('/nearbyHomes').then((homes) => {
      this.setState({
        list: homes.data,
      });
    });
  }

  render() {
    const { expanded, list } = this.state;
    if (expanded) {
      return <Neighborhood homes={list} />;
    }
    return <CollapsibleTitle />;
  }
}

export default App;
