import React from 'react';
import HomeDetail from './HomeDetail';

const Home = ({ home, showPopup, toggleContent }) => {
  return (
    <div
      className="home-main-container"
      style={{
        backgroundImage: `url("https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg")`,
      }}
    >
      <div className="home-inner-container">
        <div className="home-contents">
          <HomeDetail
            home={home}
            showPopup={showPopup}
            toggleContent={toggleContent}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
