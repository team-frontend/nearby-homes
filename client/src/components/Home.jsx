import React from 'react';
import HomeDetail from './HomeDetail';

const Home = ({home, showPopup, toggleContent, isOddLen, isLastCell }) => (
  <div
    className="home-main-container"
    style={{
      backgroundImage: `url(${home.homeImage})`,
    }}
  >
    <div className="home-inner-container">
      <div className="home-contents">
        <HomeDetail
          home={home}
          showPopup={showPopup}
          toggleContent={toggleContent}
          isLastCell={isLastCell}
          isOddLen={isOddLen}
        />
      </div>
    </div>
  </div>
);

export default Home;
