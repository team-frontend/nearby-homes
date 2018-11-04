import React, { Component } from 'react';
// import axios from 'axios';
if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
export default class FavoriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
    };
    this.toggleFavoriteButton = this.toggleFavoriteButton.bind(this);
  }

  toggleFavoriteButton() {
    const { filled } = this.state;
    // filled ? this.increaseNumberOfLikes() : this.decreaseNumberOfLikes();
    this.setState({
      filled: !filled,
    });
  }

  render() {
    const { filled } = this.state;
    if (!filled) {
      return (
        <div className="zsg-photo-card-actions">
          <div
            className="favorite-button"
            type="button"
            aria-label="Favorite to save"
          >
            <i className="fas fa-heart" onClick={this.toggleFavoriteButton} />
          </div>
        </div>
      );
    }
    return (
      <div className="zsg-photo-card-actions">
        <div
          className="favorite-button-filled"
          type="button"
          aria-label="Favorite to save"
        >
          <i
            className="fas fa-heart .filled"
            onClick={this.toggleFavoriteButton}
          />
        </div>
      </div>
    );
  }
}
