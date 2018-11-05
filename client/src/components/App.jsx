import React, { Component } from 'react';
import axios from 'axios';
import CollapsibleTitle from './CollapsibleTitle';
import Carousel from './Carousel';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      list: [],
      zipCode: '',
      isExpanded: true,
      showPopup: false,
      isLiked: false,
    };
    this.toggleCollapsibleTitle = this.toggleCollapsibleTitle.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }

  componentDidMount() {
    axios.get('/nearbyHomes').then((homes) => {
      this.setState({
        list: homes.data,
        zipCode: homes.data[0].zipCode,
      });
    });
  }

  toggleCollapsibleTitle() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  toggleContent() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
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
    const {
      currIndex,
      isExpanded,
      showPopup,
      list,
      zipCode,
    } = this.state;
    return (
      <div className="collapsible-title-container">
        <div className="collapsible-title-inner-layout">
          <CollapsibleTitle
            isExpanded={isExpanded}
            zipCode={zipCode}
            toggleCollapsibleTitle={this.toggleCollapsibleTitle}
          />
          <div
            className="collapsible-content"
            style={!isExpanded ? { display: 'none' } : { display: 'block' }}
          >
            <Carousel
              homes={list}
              currIndex={currIndex}
              showPopup={showPopup}
              goToNextSlide={this.goToNextSlide}
              goToPrevSlide={this.goToPrevSlide}
              toggleContent={this.toggleContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
