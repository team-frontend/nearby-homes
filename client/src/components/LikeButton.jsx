import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  toggleLikeButton = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { isLiked } = this.state;
    let heartClassName = 'fas fa-heart';
    let buttonClassName = 'like-button';
    isLiked === false
      ? (heartClassName, buttonClassName)
      : ((heartClassName += ' .filled'), (buttonClassName += '-filled'));

    return (
      <div className="zsg-photo-card-actions">
        <div className={buttonClassName} type="button" aria-label="Favorite to save">
          <i className={heartClassName} onClick={this.toggleLikeButton} />
        </div>
      </div>
    );
  }
}

export default LikeButton;
